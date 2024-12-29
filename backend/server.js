import express from 'express';
import { postRoutes } from './routes/postsRoutes.js';

const app = express();

app.use(express.json());

app.use('/api/posts/about', postRoutes);


app.listen(4000, 'localhost', () => {
    console.log('server started on port 4000');
});