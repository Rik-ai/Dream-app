const jwt = require ('jsonwebtoken')
const { decode } = require ('jsonwebtoken')

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const isCustomAuth = token.length < 500 //if more than google Auth but if less than custom Auth

        let decodedData

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, 'test') //'test' is secret

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token)

            req.userId = decodedData?.sub //sub is simply google's name for a specific id that differentiates every single google user
        }
        //user wants to like a post
        //click the like button => auth middleware (NEXT) => like controller...
        next()

    } catch (error) {
        console.log(error)
    }
}

module.exports = auth