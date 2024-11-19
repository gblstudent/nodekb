# Steps

## Step 1 - Code Initialization

```
npm init -y
npm i express
npm i nodemon -g
```
- Modify package.json
- Run application `npm run start-local`
- Optional - Install "REST Client" extension in VS code

## Step 2 - Repo Setup

```
git add .
git commit -m "first commit"
git remote add origin <repo-link>
git push -u origin --all
```

# Commit Details

### Part-00-End 
Part-00-End : Initial Node - Express Code

### Part-01-End 
Part-01-End : Basic Routing parameter

### Part-02-Begin 
Part-02-Begin : Response formatting & Basic error
- Status Code
- Json Response 
- Basic Error

### Part-02-End 
Part-02-End : Middleware

### Part-03-End 
Part-03-End : Controller
- Moving end points to controller
- Ordering of end points matter

### Part-04-End 
Part-04-End : Library Setup 

```
npm i body-parser crypto winston morgan helmet cors compression app-root-path dotenv
```
- Env value setup
- Log setup
