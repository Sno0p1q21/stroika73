const jwtToken = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET;

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            res.status(301).json({message: 'Не авторизован'});
        }
        req.user = jwtToken.verify(token, secretKey);
        next();
    }
    catch (e) {
        res.status(301).json({message: 'Не авторизован'});
    }
}