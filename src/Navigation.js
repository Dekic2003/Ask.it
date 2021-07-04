import React from 'react'
import {BrowserRouter,Route,Switch} from "react-router-dom";

//Component import
import Homepage from "./Pages/Homepage";
import Answers from "./Pages/Answers";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import MyQuestions from "./Pages/MyQuestions";
import Profile from "./Pages/Profile";
import ChangeInfo from "./Pages/ChangeInfo";
import ChangePassword from "./Pages/ChangePassword";

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
                <Route path="/profile/changeinfo" exact component={ChangeInfo}/>
                <Route path="/profile/changepassword" exact component={ChangePassword}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Navigation;
