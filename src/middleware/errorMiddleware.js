const errorHandler = (err,req,res,next)=>{
  const statusCode = res.statusCode === 200?500:res.statusCode;
  res.status(statusCode);                                                 //500 is a internal server error     200 show that server is working properly 
  res.json({msg:err.message,
    stack:process.env.NODE_ENV === 'production' ?null:err.stack,
  });
};


// not found
const notFound = (req,res,next)=>{
  const error = new Error(`Not found -${req.originalUrl}`);        //msg
  res.status(404);
  next(error);
};

module.exports = {errorHandler, notFound};