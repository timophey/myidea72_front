import React, { Component } from "react";
import Carousel from "./carousel";
import { Routes, Route, Link } from "react-router-dom";
import FormCommon from "./form/common";
import FormLeader from "./form/leader";
import { Outlet } from "react-router-dom";

class Myform extends Component{
    render(){
        const tabs = this.props.tabs;//.map((el)=>{el.path = '/form/'+el.path;return el;});
        // const tabs = [
        //     {
        //         name: 'Общая информация',
        //         path: '/form/',
        //         element: <FormCommon />
        //     },{
        //         name: 'Руководитель проекта',
        //         path: '/form/leader',
        //         element: <FormLeader />
        //     },/*{
        //         name: 'Команда',
        //         path: '/form/team'
        //     },{
        //         name: 'Наставник',
        //         path: '/form/mentor'
        //     },{
        //         name: 'О проекте',
        //         path: '/form/project'
        //     },{
        //         name: 'Медиа',
        //         path: '/form/media'
        //     },{
        //         name: 'Календарный план',
        //         path: '/form/plan'
        //     },{
        //         name: 'Результаты',
        //         path: '/form/result'
        //     },{
        //         name: 'Софинансирование',
        //         path: '/form/financing'
        //     },{
        //         name: 'Расходы',
        //         path: '/form/financing'
        //     }*/
        // ];
        return <div className="container">
            <h2>Паспорт проекта</h2>
            <Carousel tabs={tabs}/>
            <Outlet/>
            {/* <Routes>
                <Route path="/form/" element={<FormCommon/>}/>
                {tabs.map(({name,path,element},i)=><Route path={path} element={element} key={i}/>)}
            </Routes> */}
        </div>
    }
}

export default Myform;