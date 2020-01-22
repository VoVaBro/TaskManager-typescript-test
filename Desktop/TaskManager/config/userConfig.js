const User = require('../models/User');
const bcrypt = require('bcrypt');
const { genJwtToken } = require('../helpers/jwtConfig');
const { validationResult } = require('express-validator')


exports.signUp = async (req, res) => {
    try {
        console.log(req.body)

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректный данные при регистрации'
            })
        }
 
        let userName = await User.findOne({ username: req.body.username });

        if (userName) {
            return res.status(400).json({ status: 'error', message: 'Пользователь уже существует !' });
        }


        if (!userName) {
            const hash = await bcrypt.hash(req.body.password, 10)

            const user = new User ({
                username: req.body.username,
                password: hash
            })

            user.save()

            return res.status(201).json({ status: 'ok', message: `Пользователь ${user.username} создан!` })
        }
    } catch (err) {
        if (err) return res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
}



exports.logIn = async (req, res) => {
    try {

        let user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(404).json({ status: 'error', message: 'Пользователь не найден' });
        let isValid = await bcrypt.compare(req.body.password, user.password);
        if (!isValid) return res.status(401).json({ status: 'error', message: 'Неверныйт пароль' });
        let token = await genJwtToken(user.id)

        req.session.headers = {};
        req.session.headers['Authorization'] = token;
        req.session.save(err => {
            if (err) throw err
        })


        res.json({token, userId: user.id})

    } catch (e) {
        console.log(e)
    }
}