import express from 'express';

const app = express();

app.use(express.json());




app.listen(4000, 'localhost', () => {
    console.log('server started on port 4000');
});