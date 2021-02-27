const express = require("express");

const app = express()

app.get('/', (req, res) => {
     res.send("<h2>Hello World Docker!</h2>")
})

app.listen(80)