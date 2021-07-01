import React from 'react'
import {BrowserRouter,Route,Switch} from "react-router-dom";

//Component import
import Homepage from "./Pages/Homepage";

const Navigation = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Homepage}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Navigation;
