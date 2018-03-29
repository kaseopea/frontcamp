const express = require('express');

const app = express();

function errorHandlingMiddleware(err, req, res, next) {
    const errorStatus = 500;
    const errObj = {
        message: err.message,
        status: errorStatus,
        error: (app.get('env') === 'development') ? err : {}
    };
    res.status(errorStatus);
    res.render('error', errObj);
}

module.exports = errorHandlingMiddleware;
