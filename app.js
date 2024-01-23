const express = require('express');
const app = express();
const ExpressError = require('./expressError');  

const { mean, mode, median, valNumAndMakeArr } = require('./helpers.js');

app.use(express.json());

app.get('/mean', (req, res, next) => {
    
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400);
    }
    
    let strings = req.query.nums.split(',');
    let numArr = valNumAndMakeArr(strings);

    if (numArr instanceof Error) {
        throw new ExpressError(numArr.message, 400);
    }

    let result = {
        operation: "mean",
        result: mean(numArr)
    }
    
    return res.send(result);
});

app.get('/mode', (req, res, next) => {
    
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400);
    }
    
    let strings = req.query.nums.split(',');
    let numArr = valNumAndMakeArr(strings);

    if (numArr instanceof Error) {
        throw new ExpressError(numArr.message, 400);
    }

    let result = {
        operation: "mode",
        result: mode(numArr)
    }
    
    return res.send(result);
});

app.get('/median', (req, res, next) => {
    
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400);
    }
    
    let strings = req.query.nums.split(',');
    let numArr = valNumAndMakeArr(strings);

    if (numArr instanceof Error) {
        throw new ExpressError(numArr.message, 400);
    }

    let result = {
        operation: "median",
        result: mode(numArr)
    }
    
    return res.send(result);
});

// If no other route matches, respond with a 404
app.use((req, res, next) => {
    const e = new ExpressError("Page Not Found", 404)
    next(e)
})
  
// Error handler
app.use(function (err, req, res, next) { 
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.msg;
  
    // set the status and alert the user
    return res.status(status).json({
      error: { message, status }
    });
});

app.listen(3000, function() {
    console.log(`Server starting on port 3000`);
});