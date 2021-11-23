// * Import NPM Modules
import morgan from 'morgan'
import consola from 'consola'
import fs from 'fs'
import path from 'path'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// * Store request logs in "logs/access.log"
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const accessLogStream = fs.createWriteStream(path.join(__dirname, '../logs/access.log'), { flags: 'a' })

// TODO: Uncomment before deploying to production
// ? Morgan for production mode
// const middleware = morgan('combined', { stream: accessLogStream })

// ? Morgan in developemnt mode
const middleware = morgan('dev')

// ? Logger for debugging - replacing console.log with consola
const log = consola

export default { middleware, log }