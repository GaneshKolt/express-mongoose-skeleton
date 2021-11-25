const login = async (req, res, next) => {
    res.status(200).send({
        message: 'Handle login'
    })
}

const register = async (req, res, next) => {
    res.status(200).send({
        message: 'Handle register'
    })
}

export default {
    login,
    register
}