import React from 'react';
import Auth from './auth';

import { Route, Redirect, BrowserRouter } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    
    return (
        <BrowserRouter>
            <Route
                {...rest}
                render={
                    (props) => {
                        console.log(Auth.checkAuthenticated())
                        if (Auth.checkAuthenticated()) {
                            return <Component {...props} />
                        }
                        else {
                            return <Redirect from={props.location} to="/auth" />
                        }
                    }

                }
            />
        </BrowserRouter>
    );
}