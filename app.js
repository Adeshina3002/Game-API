const express = require ('express')
const morgan = require ('morgan')
require ('dotenv').config()
const router = require ('./router/routes')

const url = "localhost"
const PORT = process.env.PORT || 8080

const app = express()

// application middlewares

app.use(morgan ('dev'))
app.use(express.json())


// routes

app.use('/api' ,router)

app.get('/', (req, res) => {
    res.status(200).send('Welcome')
})

app.get ('*', (req, res) => {
    res.status(400).send("Unkown URL, try again")
})

app.listen(PORT, () => {
    console.log(`Server connected to http://${url}:${PORT}`);
})