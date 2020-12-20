const mongoose = require("mongoose");

const allscheme = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phoneno: {
		type: Number,
		required: true,
	},
	position: {
		type: String,
		required: true,
	},

});

module.exports = mongoose.model("scheme", allscheme);
