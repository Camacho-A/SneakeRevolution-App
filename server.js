/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config() // Load ENV Variables
const PORT = process.env.PORT
const express = require("express") // import express
const morgan = require("morgan") //import morgan
const methodOverride = require("method-override")
const SneakerRouter = require("./controllers/sneaker")

/////////////////////////////////////////////////
// Create our Express Application Object
/////////////////////////////////////////////////
const app = express()

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan("tiny")) //logging
app.use(methodOverride("_method")) // override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })) // parse urlencoded request bodies
app.use(express.static("public")) // serve files from public statically

app.use("/sneakers", SneakerRouter)


//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
app.listen(PORT, () => {
	console.log(`Listening to port: ${PORT}`)
})