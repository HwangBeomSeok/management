import React from "react";

class Customer extends React.Component {
    render(){
        return(
            <div>
                <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
                <CustomerInfo br={this.props.br} ge={this.props.ge} job={this.props.job}/>
            </div>
        )
    }
}


class CustomerProfile extends React.Component{
    render(){
        return (
            <div>
                <img src={this.props.image}/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component{
    render(){
        return (
            <div>
                <h2>{this.props.br}</h2>
                <h2>{this.props.ge}</h2>
                <h2>{this.props.job}</h2>
            </div>
        )
    }
}
export default Customer;