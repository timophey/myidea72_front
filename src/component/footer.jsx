import React, { Component } from "react";
import { Link } from "react-router-dom";

function Footer(){
    return <footer>
        <div className="container">
            <div className="row">
                <div className="logo"></div>
                <Link className="btn arrow" to="/">Главная</Link>
                <div className="attribution_group">
                    <div className="attribution">
                        Проект мультицентра <br/>«Моя Территория»
                    </div>
                    <div className="attribution">© 2023</div>
                </div>
                <div className="attribution_group">
                    <div className="attribution">Бренд дизайнер <br/>Олег Сухов</div>
                    <div className="attribution">Верстка <br/>Тимофей ланевич</div>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;