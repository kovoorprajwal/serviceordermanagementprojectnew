var React = require("react");
var CustomerInfo = require("./CustomerInfo.jsx")
var AddCustomer = require("./AddCustomer.jsx");

module.exports = React.createClass({
   render:function(){
       return(
           <div className="row">
                <div className="col-md-6">
                    <AddCustomer />
                </div>
                <div className="col-md-6">
                    {
                        this.props.customers.map(function(s,index){
                            return(
                                <CustomerInfo info={s} key={"customer"+index} />
                            )         
                        })
                    }
                </div>
           </div>
       )
   } 
});1
