import React from "react";
import { Route, Redirect } from "react-router-dom";


function PrivateRoute({ component: Component, ...rest }) {
 
  return (
  
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('access_token')&&localStorage.getItem('is_admin') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", 
            state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;