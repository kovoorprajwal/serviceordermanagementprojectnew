var React = require("react");
var actions = require("../actions/CustomerActions");

module.exports = React.createClass({
    getInitialState:function(){
        return {
            name:"",
            service:"",
            todate:"",
            fromdate:"" ,
            location:""
        }
    },
    addCustomer:function(e){
        e.preventDefault();
        actions.addCustomer(this.state);
    },
    handleInputChange:function(e){
        e.preventDefault();
        var name = e.target.name;
        var state = this.state;
        state[name] = e.target.value;
        this.setState (state);
    },
    render:function(){
        return(
            <form className="form" onSubmit={this.addCustomer}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Customer Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Customer Name:" />
                </div>

                <div className="form-group">
                    <label className="control-label" htmlFor="service">Service:
                        <select id="service" name="service" value={this.state.value} onChange={this.handleInputChange}>
                            <option value="phone"> Phone</option>
                            <option value="internet"> Internet</option>
                            <option value="tv"> Tv</option>
                        </select>
                    </label>
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="fromdate">Date From:</label>
                    <input type="text" className="form-control" id="fromdate" name="fromdate" value={this.state.value} onChange={this.handleInputChange} placeholder="Date From:" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="todate">Till Date:</label>
                    <input type="text" className="form-control" id="todate" name="todate" value={this.state.value} onChange={this.handleInputChange} placeholder="Till Date:" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="location">Location:
                        <select  id="location" name="location" value={this.state.value} onChange={this.handleInputChange}>
                            <option value="Andaman and Nicobar Islands"> Andaman and Nicobar Islands</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh"> Chandigarh </option>
                            <option value="Chhattisgarh"> Chhattisgarh</option>
                            <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                            <option value="Daman and Diu">Daman and Diu</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat"> Gujarat</option>
                            <option value="Haryana"> Haryana</option>
                            <option value="Himachal Pradesh"> Himachal Pradesh</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Jharkhand"> Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala"> Kerala</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value=" Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra"> Maharashtra</option>
                            <option value=" Manipur"> Manipur</option>
                            <option value="Meghalaya"> Meghalaya</option>
                            <option value="Mizoram"> Mizoram</option>
                            <option value="Nagaland"> Nagaland</option>
                            <option value="National Capital Territory of Delhi"> National Capital Territory of Delhi
                            </option>
                            <option value="Odisha">Odisha</option>
                            <option value="Puducherry"> Puducherry</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan"> Rajasthan</option>
                            <option value="Sikkim"> Sikkim</option>
                            <option value="Tamil Nadu"> Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura"> Tripura</option>
                            <option value="Uttar Prades"> Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal"> West Bengal</option>
                        </select>
                    </label>
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add Service</button>
                </div>
            </form>
        )
    }
})