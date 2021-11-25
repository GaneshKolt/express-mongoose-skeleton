// * Import NPM Modules
import express from 'express'

const router = express.Router()

router.post('/login', (req, res, next) => {
    res.send('login route')
})

router.post('/register', (req, res, next) => {
    res.send('login route')
})

export default router