import React from "react"
import {Route, Navigate, Redirect} from 'react-router-dom'
// import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({component: Component, ...rest}) => {

    return (
        <Route {...rest} render={(props) => {
            if (localStorage.getItem('token')){
                return(<Component {...props}/>)
            }else{
                return <Navigate to= '/login'/>
        }
    }}/>
    )
}

// PrivateRoute.propTypes = {
//     component: PropTypes.element
// };

export default PrivateRoute