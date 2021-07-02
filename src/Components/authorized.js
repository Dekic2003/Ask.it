import React from 'react'
import {useSelector} from "react-redux";

const Authorized = ({authorized,unauthorized}) => {
    const User = useSelector((state) => state.authReducer.USER)
    if (User === null) {
        return (
            <>
                {unauthorized}
            </>
        )
    } else {
        return (
            <>{authorized}</>
        )
    }

}
export default Authorized;
