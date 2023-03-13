import React, { Component, createContext, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Hero from "./hero";
import Home from "./home";

import Myform from "./myform";
import FormCommon from "./form/common";
import FormLeader from "./form/leader";
// import FormTeam from "./form/team";
import FormTeamList from "./form/team_list";
import FormPlanList from "./form/plan_list";
// import FormMentor from "./form/mentor";
import FormMentorList from "./form/mentor_list";
import FormProject from "./form/project";
import FormMedia from "./form/media";
// import FormPlan from "./form/plan";
import FormResult from "./form/result";
import FormCofinancing from "./form/fin_co";
// import FormPartfinancing from "./form/fin_part";
import FormPartfinancingList from "./form/fin_part_list";
// import FormEstimate from "./form/estimate";
import FormEstimateList from "./form/estimate_list";

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

    const tabs = {
      arItems:
        [
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
              element: <FormTeamList />
          },{
              name: 'Наставник',
              path: 'mentor',
              element: <FormMentorList/>
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
              element: <FormPlanList/>
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
            element: <FormPartfinancingList/>,
          },{
              name: 'Смета расходов',
              path: 'estimate',
              element: <FormEstimateList/>,
          }
      ]
    }
    // console.log('re');
    return <>
      <AuthContext.Provider value={contextValue}>
        <Header></Header>
        <Hero></Hero>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/form/*" element={<Myform tabs={tabs}/>}>
            {tabs.arItems.map(({name,path,element},i)=><Route path={path} element={element} key={i}/>)}
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