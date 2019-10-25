import React, {Component} from "react";
import {Link} from 'react-router-dom';

class WizardStep2 extends Component {
    render() {
        return (
            <form>
                 Image URL: <input type="text" value={this.props.image_url} onChange={this.props.handleImageUrl}/><br />
                <Link to='/wizard/1'><button>Previous Step</button></Link>
                <Link to='/wizard/3'><button>Next Step</button></Link>
            </form>
        )
    }
}

export default WizardStep2;