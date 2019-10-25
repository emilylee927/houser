import React, {Component} from "react";
import "./Header.css";

class Header extends Component {
    constructor(){
        super();
        this.state={

        }
    }




    render(){
        return(
            <div className="header-div">
                <img src="https://raw.githubusercontent.com/DevMountain/simulation-2/master/assets/houser_logo.png"></img>
                 <h1>Houser</h1>
            </div>
        )
    }
}

export default Header;