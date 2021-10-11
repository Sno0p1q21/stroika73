const jwtToken = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const ApiError = require('../utils/error');
const {User, Basket} = require('../models/models');
const secretKey = process.env.JWT_SECRET;

class UserController {
    async registration(req, res, next) {
        const {email, password} = req.body;

        if (!email || !password) {
            next(ApiError.badRequest('Не указан логин или пароль'))
        }
        const isRegistered = await User.findOne({where: {email}})

        if (isRegistered) {
            next(ApiError.badRequest('Такой пользователь уже существует'))
        }

        const hashPassword = await bcrypt.hash(password,5);
        const user = await User.create({email, password: hashPassword});
        const basket = await Basket.create({userId: user.id})
        const jwt = jwtToken.sign(
            {id: user.id, email},
            secretKey,
            {expiresIn: '24h'}
        );

        return res.json({token: jwt});
    }

    async login(req, res, next) {
        const {email, password} = req.body;

        if (!email || !password) {
            next(ApiError.badRequest('Не указан логин или пароль'))
        }
        const user = await User.findOne({where: {email}});

        if (!user) {
            next(ApiError.badRequest('Данный пользователь не найден :('))
        }

        const comparePassword = await bcrypt.compareSync(password, user.password);

        if (!comparePassword) {
            next(ApiError.badRequest('Указан неверный пароль'))
        }

        const jwt = jwtToken.sign(
            {id: user.id, email},
            secretKey,
            {expiresIn: '24h'}
        );

        return res.json({token: jwt})

    }

    async check(req, res, next) {
        const jwt = jwtToken.sign(
            {id: req.user.id, email: req.user.email},
            secretKey,
            {expiresIn: '24h'}
        );
        return res.json({token: jwt});
    }
}

module.exports = new UserController();