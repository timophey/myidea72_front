import React, { Component } from "react";
import { matchPath } from "react-router-dom";
import { useMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

class Carousel extends Component{
    
    state = {
        position: 0,
    }
    prev(){
        let val = this.state.position;
        let len = this.props.tabs.length - 1;
        console.log(val,len,val<=len);
        this.setState({position : (val===0) ? len : val-1 });
    }
    next(){
        let val = this.state.position;
        let len = this.props.tabs.length - 1;
        console.log(val,len,val<=len);
        this.setState({position : (val<len) ? val+1 : 0 });
    }
    render(){
        let tabs = this.props.tabs;
        let style = {
            '--length':tabs.length,
            '--current':this.state.position,
        }
        let match = window.location.href.endsWith(tabs[0].path);
        console.log(match);
        
        // console.log(tabs)
        return <>
        <div className="carousel" data-length={tabs.length} style={style}>
            <div className="carousel_arrow" onClick={this.prev.bind(this)}></div>
            <div className="carousel_track">
                <div className="carousel_flex">
                    {tabs.map(({name, path},i)=><NavLink to={path} className="" key={i}>{name}</NavLink>)}
                    {tabs.map(({name, path},i)=><NavLink to={path} className="" key={i+tabs.length}>{name}</NavLink>)}
                </div>
            </div>
            <div className="carousel_arrow" onClick={this.next.bind(this)}></div>
        </div>
        <div className="container">
        </div>
        </>
    }
}

export default Carousel;