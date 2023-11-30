import mongoose from "mongoose";

const Connection = async(username,password)=>{

    const URL = `mongodb://${username}:${password}@ac-lyady4j-shard-00-00.yevtgnh.mongodb.net:27017,ac-lyady4j-shard-00-01.yevtgnh.mongodb.net:27017,ac-lyady4j-shard-00-02.yevtgnh.mongodb.net:27017/?ssl=true&replicaSet=atlas-79j7tf-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL,{ useNewUrlParser: true });
        console.log("Database connnected successfully");
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
}
export default Connection;