import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component{
    render(){
        return <div className="container">
            <Link className="btn arrow" to="/form">Перейти к заявке</Link>
        </div>
    }
}

export default Home;