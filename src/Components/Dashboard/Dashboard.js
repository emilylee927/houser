import React, {Component} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import House from '../House/House.js';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        this.getHouse();
    }

    getHouse = () => {
        axios
        .get('/api/house')
        .then(response => {
            this.setState({houses: response.data})
        })
        .catch(err => console.log(err));
    }

    deleteHouse = (house_id) => {
        axios
        .delete(`/api/house/${house_id}`)
        .then(response => {
            this.getHouse();
        })
        .catch(err => console.log(err));
    }

    render() {
        let houseComponents = this.state.houses.map((house, index) => {
            return <House
                        key={index} name={house.name} address={house.address} city={house.city}
                        state={house.state} zip={house.zip} mortgage={house.mortgage} rent={house.rent}
                        image_url={house.image_url} house_id={house.house_id} deleteHouse={this.deleteHouse} />
        })
        return (
            <div>
                <header>
                    <h1>Dashboard</h1>
                    <Link to='/wizard/1'><button>Add New Property</button></Link>
                </header>
                <main>
                    {houseComponents}
                </main>
            </div>
        )
    }
}

export default Dashboard;