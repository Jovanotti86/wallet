import mongoose = require("mongoose");

export async function createMongoConenction() {
    const db: string = process.env.MONGODB_URI || '';
    return await mongoose.connect(db ,{useNewUrlParser: true}).then(() => {
        console.log('connected');
    });
} 
mongoose.Promise = global.Promise;
export {mongoose};