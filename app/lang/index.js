module.exports = { 
    ERROR: {
        E500 : 'Internal Error Occured',
        E404 : 'No Record Found',
    },
    GENERIC : {
        EMPTY : 'No Record Found',
    },
    BLOG: {        
        LIST : {
            SUCCESS : 'All information loaded successfully',            
        },
        CREATE : {
            SUCCESS : 'Record Created Successfully',
            NAME_REQUIRED : 'Name is required',
        },
        UPDATE : {
            SUCCESS : 'Record updated Successfully',
            NAME_REQUIRED : 'Name is required',
            GUID_REQUIRED : 'GUID is required',
        },
        DELETE : {
            SUCCESS : 'Record deleted Successfully',
            GUID_REQUIRED : 'GUID is required',
        },
    },
}