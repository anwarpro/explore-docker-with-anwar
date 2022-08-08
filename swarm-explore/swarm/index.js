const express = require('express')
const app = express()
const os = require('os');
const port = 5000

app.get('/', (req, res) => {
    res.send(`<h3>It's ${os.hostname()}</h3>`);
})
app.listen(port, () => {
    console.log(`Server Started on Port  ${port}`)
})