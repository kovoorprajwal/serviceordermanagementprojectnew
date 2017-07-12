var mongoose = require("mongoose");
var customerSchema = mongoose.Schema({
    name: String,
    service: String,
	fromdate: String,
	todate: String,
    location: String
	
});

module.exports = mongoose.model("customer", customerSchema);