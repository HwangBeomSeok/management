import React from "react";
import { TableRow, TableCell } from "@material-ui/core";

class Customer extends React.Component {
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>                
                <TableCell><img src={this.props.image}/></TableCell>                
                <TableCell>{this.props.name}</TableCell>                
                <TableCell>{this.props.br}</TableCell>                
                <TableCell>{this.props.ge}</TableCell>                
                <TableCell>{this.props.job}</TableCell>                
            </TableRow>
        )
    }
}

export default Customer;