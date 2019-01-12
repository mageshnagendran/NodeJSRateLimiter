var express = require('express');
var router = express.Router();
const rateLimit = require("express-rate-limit");

const getDetailLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour window
    max: 5, // start blocking after 5 requests
    message:
    {
        status: 'failed',
        message: "Too many request from this IP, please try again after an hour"
    }
        
});

router.all('/getDetails', getDetailLimiter, (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).json({
            status: 'failed',
            error: 'HTTP Method Not Allowed.'
        })
    }

    res.status(200).json({
        status: 'success',
        data: 'DataArray from db'
    })
});

module.exports = router;