import express from 'express';
import { postRoutes } from './routes/postsRoutes.js';
import { userRoutes } from './routes/usersRoutes.js';
import mongoose from "mongoose";

import path from 'path';
import { fileURLToPath } from 'url';

// Resolving dirname for ES module

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express();

app.use(express.json());

app.use('/api/posts/', postRoutes);
app.use('/api/users/', userRoutes);

// serve client app
app.use(express.static(path.join(__dirname, '/client/dist')))

// Render client for any path
app.get("*", (req, res) => res.sendFile(path.join(__dirname, '/client/dist/index.html')))

// mongodb://localhost:27017/
mongoose.connect(process.env.DB_URI, { dbName: 'demo_db' }).then(() => {
    console.log('connectd to monogo db successfuly.');

    app.listen(4000, 'localhost', () => {
        console.log('server started on port 4000');
    });

}).catch((err) => {
    console.log('error: ', err);
})


