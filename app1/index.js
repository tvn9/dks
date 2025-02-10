const express = require("express")

const app = express()

app.get("/", (req, res) => {
   res.send("<h1>Hi there</h1>\n<h2>Bye now!</h2>")
})

app.listen(8888, () => {
   console.log("Starting server on port 8888")
})