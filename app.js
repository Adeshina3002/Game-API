const express = require ('express')
const morgan = require ('morgan')
require ('dotenv').config()
const router = require ('./router/routes')
const url = "localhost"

/** application port */
const PORT = process.env.PORT || 8080

/** Database Connection */
const dbConnect = require ('./database/connection.js')

const app = express()

/* application middlewares */
app.use(morgan ('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

/* router routes */
app.use('/api', router)

/** application routes */
app.get('/', (req, res) => {
    try {
        res.status(200).send('Welcome to JavaScript Quiz App')
    } catch (error) {
        res.json(error)
    }
})

app.get ('*', (req, res) => {
    res.status(400).send("Unkown URL, try again")
})

/** The database gets connected first before connecting to the server */
dbConnect()
    .then(() => {
        try {
            app.listen(PORT, () => {
                console.log(`Server connected to http://${url}:${PORT}`);
            })
        } catch (error) {
            console.log("Cannot connect to the server...");
        }
})
    .catch(error => {
        console.log("Invalid connection database...", error.message);
    })
