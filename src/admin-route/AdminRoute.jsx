import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { DatabaseContext } from '../layout/Root';

const AdminRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const { users } = useContext(DatabaseContext);
    const databaseUser = users.find(dbUser => dbUser?.email === user?.email)

    if (databaseUser?.userRole === "admin") {
        return children
    } else {
        return
    }
};

export default AdminRoute;