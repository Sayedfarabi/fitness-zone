import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../component/loading/Loading';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (user) {
        return children;
    }

    if (loading) {
        return (
            <Loading></Loading>
        )
    }




    return <Navigate to="/sign-in" state={{ from: location }} replace ></Navigate>;

};

export default PrivateRoute;