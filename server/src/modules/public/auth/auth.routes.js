import express from 'express';

let router = express.Router();

router.get('/me' , (req,res) => {
    res.send('request mil rahi hai')
})

export default router