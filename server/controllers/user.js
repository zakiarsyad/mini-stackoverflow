
const User = require('../models/user')
const { generateToken, verifyToken } = require('../helpers/jwt')
const { compareSync } = require('../helpers/bcryptjs')

class UserController {
    static register(req, res, next) {
        let { email, password, name } = req.body

        User.create({ email, password, name })
            .then(user => {
                const token = generateToken({
                    userId: user._id,
                    name,
                    email
                })

                res.status(201).json({
                    token,
                    user: {
                        userId: user.id,
                        email: user.email,
                        name: user.name
                    }
                })
            })
            .catch(next)
    }

    static login(req, res, next) {
        const { email, password } = req.body

        User.findOne({ email })
            .then(user => {
                if (user && compareSync(password, user.password)) {
                    const token = generateToken({
                        userId: user._id,
                        name: user.name,
                        email
                    })

                    res.status(200).json({
                        token,
                        user: {
                            userId: user.id,
                            email: user.email,
                            name: user.name
                        }
                    })
                } else next({
                    status: 403,
                    message: `Invalid username / password!`
                })
            })
            .catch(next)
    }

    static checkToken(req, res, next) {
        const { token } = req.headers

        try {
            req.decode = verifyToken(token)
            res.status(200).json(req.decode)
        } catch (err) {
            next({
                status: 403,
                message: `Access token is invalid!`
            })
        }
    }
}

module.exports = UserController