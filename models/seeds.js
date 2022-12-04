///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const { urlencoded } = require("express")
const mongoose = require("./connection")
const Sneaker = require("./sneaker")
// const img = require("../images/")


mongoose.connection.on("open", () => {
	const sneakers = [
		{
			name: "Air Jordan 1",
			year: "1985",
			img: "http://img.pokemondb.net/artwork/bulbasaur.jpg",
			deadstock: true,
		},
		{
			name: "Air Max 1",
			year: "1997",
			img: "https://images.complex.com/complex/images/c_fill,dpr_2.0,f_auto,q_auto,w_1400/fl_lossy,pg_1/uqh5j3hte9nlfymbegg6/nike-air-max-1-white-red?fimg-client",
			deadstock: true,
		},
		{
			name: "Air Force 1",
			year: "1982",
			img: "https://images.complex.com/complex/images/c_fill,dpr_2.0,f_auto,q_auto,w_1400/fl_lossy,pg_1/o6sbzjdbywizonhde4j6/white-nike-air-force-1-low?fimg-client",
			deadstock: true,
		},
		{
			name: "Air Huarache",
			year: "1992",
			img: "https://images.complex.com/complex/images/c_fill,dpr_2.0,f_auto,q_auto,w_1400/fl_lossy,pg_1/pyguqnzsdtmpd4b9v88z/nike-air-huarache-scream-green?fimg-client",
			deadstock: true,
		},
		{
			name: "Air Jordan XI",
			year: "1995",
			img: "https://images.complex.com/complex/images/c_fill,dpr_2.0,f_auto,q_auto,w_1400/fl_lossy,pg_1/q2ygtsqjptlxo1suj5gn/air-jordan-11-concord?fimg-client",
			deadstock: true,
		},
		{
			name: "Air Jordan IV",
			year: "1989",
			img: "https://images.complex.com/complex/images/c_fill,dpr_2.0,f_auto,q_auto,w_1400/fl_lossy,pg_1/ehxq6rbr2pbimnxmtg65/air-jordan-4-black-cement?fimg-client",
			deadstock: true,
		},
		{
			name: "Dunk",
			year: "1986",
			img: "https://images.complex.com/complex/images/c_fill,dpr_2.0,f_auto,q_auto,w_1400/fl_lossy,pg_1/esyeijelbvfp50gqy6vp/nike-dunk-high-michigan?fimg-client",
			deadstock: true,
		},
	]
	Sneaker.deleteMany({}, (err, data) => {
		Sneaker.create(sneakers, (err, data) => {
			// log the create fruits to confirm
			console.log("--------Sneakers Created----------")
			console.log(data)
			console.log("--------Sneakers Created----------")

			// close the DB connection
			mongoose.connection.close()
		})
	})
})