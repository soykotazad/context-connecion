import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoutes = ( {children  }) => {

    const { user ,loding } =useContext(AuthContext);
    if(loding) {
        return <span className="flex justify-center loading loading-infinity loading-lg"></span>
    }
     if (user ) {
        return children;
     }
 
    return  <Navigate to="/login" > Login</Navigate>
};

export default PrivetRoutes;