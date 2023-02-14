const mongoose = require('mongoose');
const dbConnect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        });
        console.log(`DB connected successfully`);
    }
    
    catch(e)
    {
        console.log(`Error ${e.message}`);
    }
};

module.exports = dbConnect;