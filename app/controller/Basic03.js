const {randomBytes} = require('crypto');
var express = require('express');
var router = express.Router();

const db = require("./../config/db")
var API_MSG = require('../lang');

const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
};

const getBlogs = asyncMiddleware ( async (req, res,next) => {
    const data = await db.query("select * from blogs");        
    if(!data){
        res.status(404).send(API_MSG.ERROR.E404);
    }else{
        res.status(200).send({
            success : true,
            message: API_MSG.BLOG.LIST.SUCCESS,
            totalRecords: data[0].length,
            data : data[0]
        })
    }
});

const getBlogById = asyncMiddleware (async (req, res) => {
    const blogId = req.params.id;
    if(!blogId){
        res.status(400).send('Blog Id is required');
    }
    const data = await db.query("select * from blogs where GUID = ?",[blogId]);
    if(!data){
        res.status(404).send(API_MSG.ERROR.E404);
    }else{
        res.status(200).send({
            success : true,
            message: API_MSG.BLOG.LIST.SUCCESS,
            totalRecords: data[0].length,
            data : data[0]
        })
    }
});

const createBlog = asyncMiddleware (async (req, res) => {
    const GUID = randomBytes(4).toString('hex');
    const {name} = req.body;
    
    if(!name){
        res.status(400).send(API_MSG.BLOG.CREATE.NAME_REQUIRED);
    }
    const data = await db.query("insert into blogs (GUID, Name) values (?,?)",[GUID, name]);
    if(!data){
        res.status(404).send(API_MSG.ERROR.E404);
    }else{
        res.status(201).send({
            success : true,
            message: API_MSG.BLOG.CREATE.SUCCESS
        })
    }
});

const updateBlog = asyncMiddleware (async (req, res) => {
    const {name, GUID} = req.body;
    
    if(!name){
        res.status(400).send(API_MSG.BLOG.UPDATE.NAME_REQUIRED);
    }else if(!GUID){
        res.status(400).send(API_MSG.BLOG.UPDATE.GUID_REQUIRED);
    }
    const data = await db.query("update blogs set Name = ? where GUID = ?",[name , GUID]);
    if(!data){
        res.status(404).send(API_MSG.ERROR.E404);
    }else{
        res.status(201).send({
            success : true,
            message: API_MSG.BLOG.UPDATE.SUCCESS
        })
    }

});

const deleteBlog = asyncMiddleware (async (req, res) => {
    const {GUID} = req.body;    
    if(!GUID){
        res.status(400).send(API_MSG.BLOG.DELETE.GUID_REQUIRED);
    }
    const data = await db.query("delete from blogs where GUID = ?",[GUID]);
    if(!data){
        res.status(404).send(API_MSG.ERROR.E404);
    }else{
        res.status(201).send({
            success : true,
            message: API_MSG.BLOG.DELETE.SUCCESS
        })
    }
});

router.get('/', getBlogs);
router.get('/:id', getBlogById);
router.post('/', createBlog);
router.put('/', updateBlog);
router.delete('/', deleteBlog);


module.exports = router;