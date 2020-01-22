const router = require('express').Router();
const { signUp, logIn } = require('../config/userConfig')
const { check } = require('express-validator')



// /users/signup
router.post('/signup',
    [
        check('username', 'Некорректное имя').isString(),
        check('password', 'Минимальная длина пароля 3 символов')
            .isLength({ min: 3 })
    ],
    signUp)

router.post('/login', logIn)

module.exports = router;