import mongoose from "mongoose";

async function connectDb(){
    //connect with mongoDb
    mongoose.connect('mongodb://127.0.0.1:27017/E-Learning-Platform')
    .then(()=>console.log('Database Connected'))
    .catch(err=>console.log('error',err));
}

export default connectDb;


