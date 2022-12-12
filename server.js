/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config() // Load ENV Variables
const PORT = process.env.PORT
const express = require("express") // import express
const morgan = require("morgan") //import morgan
const methodOverride = require("method-override")
const SneakerRouter = require("./controllers/sneaker")
const UserRouter = require("./controllers/user")
const session = require("express-session")
const MongoStore = require("connect-mongo")

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
app.use(session({
		secret: process.env.SECRET,
		store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
		saveUninitialized: true,
		resave: false,
	})
)


app.use("/sneakers", SneakerRouter)
app.use("/user", UserRouter)

app.get("/", (req, res) => {
	res.redirect("/sneakers")
})


//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
app.listen(PORT, () => {
	console.log(`Listening to port: ${PORT}`)
})