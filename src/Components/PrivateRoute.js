import React from "react"
import {Route, Navigate, Redirect} from 'react-router-dom'
// import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types

const PrivateRoute = ({children}) => {
    if (!localStorage.getItem('token')){
        return<Navigate to='/login'/>
    }
    return children
}
// PrivateRoute.propTypes = {
//     component: PropTypes.element
// };

export default PrivateRoute