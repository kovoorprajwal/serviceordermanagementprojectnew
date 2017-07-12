var dispatcher = require("../dispatcher");

module.exports = {
    addCustomer:function(customer){
        dispatcher.dispatch({
           customer:customer,
           type:"customer:addCustomer"
        });
    },
    deleteCustomer:function(customer){
        dispatcher.dispatch({
           customer:customer,
           type:"customer:deleteCustomer"
        });
    }
}