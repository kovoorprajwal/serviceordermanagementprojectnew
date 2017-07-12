var dispatcher = require("../dispatcher");
var customerService = require("../services/customerService");

function CustomerStore() {
    var listeners = [];

    function onChange(listener) {
        getCustomers(listener);
        listeners.push(listener);
    }
    
    function getCustomers(cb){
        customerService.getCustomers().then(function (res) {
            cb(res);
        });
    }

    function addCustomer(customer) {
        customerService.addCustomer(customer).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function deleteCustomer(customer) {
        customerService.deleteCustomer(customer).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function triggerListeners() {
        getCustomers(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "customer") {
            switch (split[1]) {
                case "addCustomer":
                    addCustomer(payload.customer);
                    break;
                case "deleteCustomer":
                    deleteCustomer(payload.customer);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    }
}

module.exports = CustomerStore();