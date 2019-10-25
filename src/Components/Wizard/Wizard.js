import React, {Component} from "react";
import {Route, Switch} from 'react-router-dom';
import store, {UPDATE_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_STATE, UPDATE_ZIP,
    UPDATE_IMAGE_URL} from '../../stores.js';
import axios from "axios";
import WizardSteps from './WizardSteps.js';

class Wizard extends Component {
    constructor(){
        super();
        const reduxState = store.getState();
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip,
            image_url: reduxState.image_url,
            mortgage: 0,
            rent: 0
        }
    }
    
    componentDidMount(){
        store.subscribe(()=>{
            const reduxState = store.getState();
            this.setState({
                name: reduxState.name,
                address:reduxState.address,
                city: reduxState.city,
                state: reduxState.state,
                zip: reduxState.zip,
                image_url: reduxState.image_url,
            }) 
        })
    }


    handleName = e => {
        store.dispatch({
            type:UPDATE_NAME,
            payload:e.target.value
        });
    }

    handleAddress = e => {
        store.dispatch({
            type:UPDATE_ADDRESS,
            payload:e.target.value
        });
    }

    handleCity = e => {
        store.dispatch({
            type:UPDATE_CITY,
            payload:e.target.value
        });
    }

    handleState = e => {
        store.dispatch({
            type:UPDATE_STATE,
            payload:e.target.value
        });
    }

    handleZip = e => {
        store.dispatch({
            type:UPDATE_ZIP,
            payload:e.target.value
        });
    }

    handleImageUrl = e => {
        store.dispatch({
            type:UPDATE_IMAGE_URL,
            payload:e.target.value
        });
    }

    handleMortgage = e => {
        this.setState({mortgage:e.target.value})
    }

    handleRent = e => {
       this.setState({rent:e.target.value})
    }


    submitInfo = e =>{
       e.preventDefault();
       axios.post('/api/house',{
           name: this.state.name,
           address: this.state.address,
           city:this.state.city,
           state:this.state.state,
           zip:this.state.zip,
           image_url:this.state.image_url,
           mortgage:this.state.mortgage,
           rent:this.state.rent
       }).then(response=>{
           this.props.history.push('/');
       }).catch(err=>console.log(err))
    }

    forgetAllInfo = (event) => {
        event.preventDefault();
        store.dispatch({
            type: UPDATE_NAME,
            payload: ''
        });
        store.dispatch({
            type: UPDATE_ADDRESS,
            payload: ''
        });
        store.dispatch({
            type: UPDATE_CITY,
            payload: ''
        });
        store.dispatch({
            type: UPDATE_STATE,
            payload: ''
        });
        store.dispatch({
            type: UPDATE_ZIP,
            payload: ''
        });
        store.dispatch({
            type: UPDATE_IMAGE_URL,
            payload: ''
        });
        this.setState({mortgage: 0, rent: 0})
        this.props.history.push('/')
    }


    render(){
        return(
            <div>
                <header>
                    <h1>Wizard</h1>
                    <button onClick={this.forgetAllInfo}>Cancel</button>           
                </header>
                <Switch>
                    <Route to='/wizard/:step'>
                        <WizardSteps name={this.state.name} handleName={this.handleName}
                                address={this.state.address} handleAddress={this.handleAddress}
                                city={this.state.city} handleCity={this.handleCity}
                                state={this.state.state} handleState={this.handleState}
                                zip={this.state.zip} handleZip={this.handleZip}
                                image_url={this.state.image_url} handleImageUrl={this.handleImageUrl}
                                mortgage={this.state.mortgage} handleMortgage={this.handleMortgage}
                                rent={this.state.rent} handleRent={this.handleRent}
                                submitInfo={this.submitInfo} />
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default Wizard;
