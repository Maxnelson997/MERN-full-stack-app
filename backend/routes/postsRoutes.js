import express from 'exrpess';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ msg: 'Hello User' })
});

router.post('/', (req, res) => {
    console.log('req body: ', req.body)
    res.status(200).json({ msg: 'post request' })
});

export { router as postRoutes }
