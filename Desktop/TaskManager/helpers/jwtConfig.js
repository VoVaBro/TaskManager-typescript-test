const jwt = require('jsonwebtoken');


const accessToken = {
    secret: 'TaskManagerApp',
    expire: '24h'
}

const genJwtToken = userId => {
    const payload = {
        id: userId,
        type: 'access'
    }
    const secret = accessToken.secret

    const options = {
        expiresIn: accessToken.expire
    }

    const token = jwt.sign(payload, secret, options)

    return token;
}

module.exports = {
    genJwtToken,
    accessToken
}