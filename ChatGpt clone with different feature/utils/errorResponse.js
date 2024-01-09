class errorResposnse extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}


module.exports = errorResposnse