const crypto = require('crypto')

const genetareToken = () => {
    return crypto.randomBytes(64).toString('hex');
}

const generateId = () => {
    return crypto.randomBytes(16).toString('hex');
}

module.exports = { genetareToken, generateId }