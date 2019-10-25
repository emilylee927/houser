import React, {Component} from "react";
import WizardStep1 from './WizardStep1.js';
import WizardStep2 from './WizardStep2.js';
import WizardStep3 from './WizardStep3.js';

class WizardSteps extends Component {
    render() {
        let wizardStep;
       
        let step = this.props.match.params.step;
        if (step === '1') {
            wizardStep = (
                <WizardStep1 name={this.props.name} handleName={this.props.handleName}
                            address={this.props.address} handleAddress={this.props.handleAddress}
                            city={this.props.city} handleCity={this.props.handleCity}
                            state={this.props.state} handleState={this.props.handleState}
                            zip={this.props.zip} handleZip={this.props.handleZip} />
            );
        } else if (step === '2') {
            wizardStep = (
                <WizardStep2 image_url={this.props.image_url} handleImageUrl={this.props.handleImageUrl} />
            );
        } else if (step === '3') {
            wizardStep = (
                <WizardStep3 mortgage={this.props.mortgage} handleMortgage={this.props.handleMortgage}
                rent={this.props.rent} handleRent={this.props.handleRent}
                submitInfo={this.props.submitInfo} />
            );
        }
        return (
            {wizardStep}
        );
    }
}

export default WizardSteps;





