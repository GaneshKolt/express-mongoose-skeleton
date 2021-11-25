// * Import NPM Modules
import express from 'express'

// * Import local JS files
import authRoutes from './auth.route.js'

const router = express.Router()

router.use("/auth", authRoutes)

export default router