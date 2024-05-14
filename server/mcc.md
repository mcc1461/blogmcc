```
TO DO
1. First of all, the required libraries installed.
/_
cp .env-sample .env
npm init -y
npm i express dotenv mongoose express-async-errors
npm i morgan swagger-autogen swagger-ui-express redoc-express
mkdir logs
nodemon
https://www.toptal.com/developers/gitignore/  (node)
_/
2. index.js, .env, src, logs, gitignore created.
3. For DB Connection, inside config dir dbConnection file created.
4. .env and require("dotenv").config() process needed.
5. Via ERD models, controllers, routes created.
6. First User model,controller and route coded.
7. routes > index.js created
8. routes > index.js connected to root dir > index.js
9. Error middleware created to catch errors globally.
10. ErrorHandler is placed/required right before app.listen to be able catch all errors beforehand.
11. According to user model sample user created.
{
    "username": "admin",
    "password": "Admin123*",
    "email": "admin@site.com",
    "isAdmin": true
}
12. 
````
