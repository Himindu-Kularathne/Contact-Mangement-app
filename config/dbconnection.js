mongoose =  require("mongoose");

const connectDB = async () => {
 
    try {
        const connect =  await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("connected");

    } catch (err) {
        console.log("db is not connected");
        console.log(err);
        process.exit(1);
    }

    
}
module.exports = connectDB;

