import React, { Component, createContext, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Hero from "./hero";
import Home from "./home";

import Myform from "./myform";
import FormCommon from "./form/common";
import FormLeader from "./form/leader";
import FormTeam from "./form/team";
import FormMentor from "./form/mentor";
import FormProject from "./form/project";
import FormMedia from "./form/media";
import FormPlan from "./form/plan";
import FormResult from "./form/result";
import FormCofinancing from "./form/fin_co";
import FormPartfinancing from "./form/fin_part";
import FormEstimate from "./form/estimate";

import Notfound from "./notfound";
import AuthContext from "../context/auth.context";
import { Routes, Route, Link } from "react-router-dom";

// const CurrentContext = createContext({auth: false});

// import s from "./app.component.css";
function App(){
// class App extends Component {
//   render() {
    const [isLogged, setLogged] = useState(false);
    const toggleLogged = () => setLogged(!isLogged);
    let contextValue = {
      logged: isLogged,
      loginout: toggleLogged,
    }

    const tabs = [
      {
          name: 'Общая информация',
          path: '',
          element: <FormCommon />
      },{
          name: 'Руководитель проекта',
          path: 'leader',
          element: <FormLeader />
      },{
          name: 'Команда',
          path: 'team',
          element: <FormTeam />
      },{
          name: 'Наставник',
          path: 'mentor',
          element: <FormMentor/>
      },{
          name: 'О проекте',
          path: 'project',
          element: <FormProject/>
      },{
          name: 'Медиа',
          path: 'media',
          element: <FormMedia/>
      },{
          name: 'Календарный план',
          path: 'plan',
          element: <FormPlan/>
      },{
          name: 'Результаты',
          path: 'result',
          element: <FormResult/>,
      },{
          name: 'Софинансирование',
          path: 'cofinancing',
          element: <FormCofinancing/>,
      },{
        name: 'Средства Партнеров',
        path: 'financing',
        element: <FormPartfinancing/>,
      },{
          name: 'Смета расходов',
          path: 'estimate',
          element: <FormEstimate/>,
      }
  ];
  
    return <>
      <AuthContext.Provider value={contextValue}>
        <Header></Header>
        <Hero></Hero>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/form/*" element={<Myform tabs={tabs}/>}>
            {tabs.map(({name,path,element},i)=><Route path={path} element={element} key={i}/>)}
          </Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
        <Footer></Footer>
      </AuthContext.Provider>
    </>;
//   }
// }
}
export default App;