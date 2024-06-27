import mongoose from 'mongoose';


let connected = false;


const connectDb = async () => {
    mongoose.set('strictQuery', true);
};