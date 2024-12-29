import express from 'express';
import { postRoutes } from './routes/postsRoutes.js';
// import { MongoClient } from 'mongodb';
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.use('/api/posts/', postRoutes);

mongoose.connect("mongodb://localhost:27017/", { dbName: 'demo_db' }).then(() => {
    console.log('connectd to monogo db successfuly.');

    app.listen(4000, 'localhost', () => {
        console.log('server started on port 4000');
    });

}).catch((err) => {
    console.log('error: ', err);
})

