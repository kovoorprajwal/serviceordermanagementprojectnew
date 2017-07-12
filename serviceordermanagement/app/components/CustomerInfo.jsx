var React = require("react");
var actions = require("../actions/CustomerActions");

module.exports = React.createClass({
                deleteCustomer: function(e){
                e.preventDefault();
                actions.deleteCustomer(this.props.info);
            },
                render:function(){
                return(
                < div className = "panel panel-default">
                <div className="panel-heading">
                {this.props.info.name}
                <span className="pull-right text-uppercase delete-button" onClick={this.deleteCustomer}>&times;</span>
                </div>
                <div className="panel-body">
                    <label>Activation Date:</label>
                    {this.props.info.fromdate}</div>
                </div>
                )
                }
                })
