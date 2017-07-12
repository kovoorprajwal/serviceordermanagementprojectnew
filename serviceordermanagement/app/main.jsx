 var React = require("react");
var ReactDOM = require("react-dom");
var CustomersList = require("./components/CustomersList.jsx");
var customersStore = require("./stores/customersStore");
var _customers = [];
var getCustomersCallback = function(customers){
    _customers = customers;
    render();
};
customersStore.onChange(getCustomersCallback);

function render(){
    ReactDOM.render(<CustomersList customers={_customers} />, document.getElementById("container"));
}
