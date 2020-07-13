import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../AuthedContext';
import { Route, Redirect } from 'react-router';

interface ProtectedRouteProps {
    component: React.ComponentType<any>;
    path: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, path }) => {
    const context = useContext(AuthContext);

    useEffect(() => {
        console.log('loading proceted route${path}');
    }, [Component, path]);

    return (
        <Route path={path} render={() => context.isAuthenticated ? <Component /> : <Redirect to="/auth/login" />} />
    );
}