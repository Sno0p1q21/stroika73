const ApiError = require('../utils/error');

module.exports = function (error, req, res, next) {
    if(error instanceof ApiError) {
        return res.status(error.status).json({message: error.message})
    }
    res.status(500).json({message: 'Что-то пошло не так..'})
}