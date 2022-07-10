
const errorHandler = (err, req, res, next) => {
    let code = null
    let message = []

    switch (err.name) {
        case "NotFound":
            code = 404
            message.push(err.message)
            break;
        case "BadRequest":
            code = 400
            message.push(err.message)
            break;
        default:
            code = 500
            message.push(err.message || "Internal server error")
            break;
    }

    res.status(code).json({ message })
}

module.exports = { errorHandler }
