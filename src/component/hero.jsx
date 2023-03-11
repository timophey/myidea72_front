import React from "react";

function Hero(){
    return <div className="hero">
            <div className="row">
                <div className="hero_arrow"></div>
                <div className="hero_title">
                    <h1>Заявка</h1>
                    <div className="hero_subtitle">на участие в конкурсе моя идея</div>
                </div>
                <div className="hero_right">
                    <div className="">Но прежде не забудь внимательно ознакомиться с положением конкурса</div>
                    <div className="btn arrow dark">Положение</div>
                </div>
            </div>
        </div>
}
export default Hero;