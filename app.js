// bycryptjs is used to convert the password from original form to hash form
// so it makes difficult to identify
const http = require("http");
const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./src/config/dbConnect');
const { errorHandler,notFound } = require('./src/middleware/errorMiddleware');
const userRoute = require('./src/routes/users/usersRoute');


const app = express();
dotenv.config();

const PORT = process.env.PORT;
// db connect
dbConnect();

// middlewares
app.use(express.json());         //to parse json data-convert json data to object

const server = http.createServer(app);
// routes
app.use('/api/users',userRoute);


// Error Handler
// it is used to detect all type of errors
app.use(notFound);   //first it will call and return the error to the error handle function
app.use(errorHandler);


// module.exports= app;


server.listen(PORT , console.log(`server is running on port ${PORT}`));

