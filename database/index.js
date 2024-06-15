
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import bookRoute from './../database/route/book.route.js';
import UserRoute from './../database/route/user.route.js';

const app = express();
app.use(cors());
app.use(express.json())
dotenv.config();
const port = process.env.PORT || 4001;
const uri = process.env.MongoDBURI;

console.log(port);
console.log(uri);
//connection to mongoDB
try {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to mongoDB");

} catch (error) {
    console.log("Error: ", error);
}
//define route
app.use("/book",bookRoute);
app.use("/User",UserRoute);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})