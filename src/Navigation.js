import React from 'react'
import {BrowserRouter,Route,Switch} from "react-router-dom";

//Component import
import Homepage from "./Pages/Homepage";
import Answers from "./Pages/Answers";
import Login from "./Pages/Login";

const Navigation = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/question/:id/:question" exact component={Answers}/>
                <Route path="/login" exact component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Navigation;
