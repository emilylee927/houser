import React, {Component} from "react";
import {Link} from 'react-router-dom';

class WizardStep3 extends Component {
    render() {
        return (
            <form>
                Monthly Mortgage Amount: <input type="text" value={this.props.mortgage} onChange={this.props.handleMortgage}/><br />
                Desired Monthly Rent: <input type="text" value={this.props.rent} onChange={this.props.handleRent}/><br />
                <Link to='/wizard/2'><button>Previous Step</button></Link>
                <button onClick={this.props.submitInfo}>Complete</button>
            </form>
        )
    }
}

export default WizardStep3;