import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth.context";

// class Header extends Component {
    
    // static contextType = CurrentContext;
function Header() {
    const auth = useContext(AuthContext);
        return <><header>
            <div className="container">
                <div className="row">
                    <a href="#" className="logo"></a>
                    <a className="auth_vk" onClick={auth.loginout}>
                        {auth.logged ? "Выйти из":"Авторизация через"} <i className="icon vk"></i></a>
                    <a href="" className="icon burger"></a>
                </div>
            </div>
        </header>
        {/* <Hero></Hero> */}
        </>;
    }
//   }
export default Header;