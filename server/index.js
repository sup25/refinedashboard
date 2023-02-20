import express from 'express'
import * as dotenv from "dotenv"
import cors from "cors"

import connectDB from './mongodb/connect.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }))

app.get('/', (req, res) => {
    res.send({ message: 'Hellow World' })
})

const startServer = async () => {
    try {
        //connect to the database
        connectDB(process.env.MONGODB_URL)
        app.listen(8080, () => console.log('server has started on port http://localhost:8080'))
    } catch (err) {
        console.log(err)
    }
}
startServer()