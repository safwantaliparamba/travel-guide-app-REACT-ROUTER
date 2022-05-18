import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import { Route } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
    const isLoggedIn = localStorage.getItem("user_data");
    const location = useLocation();
    return (
        <Route
            {...rest}
            render={(props) => {
                if (isLoggedIn) {
                    return <Component {...rest} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/auth/login/",
                                search: `?search=${location.pathname}`,
                            }}
                        />
                    );
                }
            }}
        />
    );
}

export default PrivateRoute;
