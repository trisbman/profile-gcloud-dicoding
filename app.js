'use strict'
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello, world! Welcome to App Engine!')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is up and listening at port: ${PORT}`)
})
