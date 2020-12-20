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
	editedValue: {
		type: Number,
        required: true,
        default:false
	},
});

module.exports = mongoose.model("scheme", allscheme);
