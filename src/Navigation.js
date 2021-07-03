import React from 'react'
import {BrowserRouter,Route,Switch} from "react-router-dom";

//Component import
import Homepage from "./Pages/Homepage";
import Answers from "./Pages/Answers";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import MyQuestions from "./Pages/MyQuestions";
import Profile from "./Pages/Profile";

const Navigation = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/question/:id/:question" exact component={Answers}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/myquestions" exact component={MyQuestions}/>
                <Route path="/profile" exact component={Profile}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Navigation;
