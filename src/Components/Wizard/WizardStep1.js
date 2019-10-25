import React, {Component} from "react";
import {Link} from 'react-router-dom';

class WizardStep1 extends Component {
    render() {
        return (
            <form>
                Property Name: <input type="text" value={this.props.name} onChange={this.props.handleName}/><br />
                Address: <input type="text" value={this.props.address} onChange={this.props.handleAddress}/><br />
                City: <input type="text" value={this.props.city} onChange={this.props.handleCity}/><br />
                State: <input type="text" value={this.props.state} onChange={this.props.handleState}/><br />
                Zip: <input type="text" value={this.props.zip} onChange={this.props.handleZip}/><br />
                <Link to='/wizard/2'><button>Next Step</button></Link>
            </form>
        )
    }
}

export default WizardStep1;