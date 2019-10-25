import React, {Component} from "react";


class House extends Component {
   


    render() {
        return(
            <div>
                <img src={this.props.image_url} alt={this.props.name}></img>
                <p>Property Name: {this.props.name}</p>
                <p>Address: {this.props.address}</p>
                <p>City: {this.props.city}</p>
                <p>State: {this.props.state}</p>
                <p>Zip: {this.props.zip}</p>
                <p>Monthly Mortgage: {this.props.mortgage}</p>
                <p>Desired Rent: {this.props.rent}</p>
                <button onClick={() => this.props.deleteHouse(this.props.house_id)}>Delete</button>
            </div>
        )
    }
}

export default House;