var mongoose = require("mongoose");
var Customer = require("../data/customer");
var _ = require("underscore");

var router = require("express").Router();
router.route("/customers/:id?").get(getCustomers).post(addCustomer).delete(deleteCustomer);

function getCustomers(req, res) {
    Customer.find(function (err, customers) {
        if (err)
            res.send(err);
        else
            res.json(customers);
    });
}

function addCustomer(req, res) {
    var customer = new Customer(_.extend({}, req.body));
    customer.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(customer);
    });
}

function deleteCustomer(req, res) {
    var id = req.params.id;
    Customer.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;