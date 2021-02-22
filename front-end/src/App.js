import * as React from "react";
import { Route, Switch } from 'react-router-dom';
import SignUp from './Auth/pages/signup';
import ThanksPage from './Customer/pages/thanksPage.js';
 import Login from './Auth/pages/login';
import Menu from './Admin/components/menu';
import Customers from './Admin/pages/customers';
import Average from './Admin/pages/average';

function isAuth(){
  return(localStorage.getItem('auth'));
}
function isAdmin(){
  return(isAuth()&&localStorage.getItem('admin'));
}
function App() {
  // customer route 
  if (isAuth()&&isAdmin()) return (<div className="App">
      <Switch>
              <Route path="/thanks" >
                <ThanksPage/>
              </Route>
            
            </Switch>
    </div>);

// admin route
    if (isAdmin()) return (<div className="App">
    <Switch>
    
            <Route path="/customers">
            <Customers></Customers>
            </Route>
            
            <Route path="/menu">
            <Menu></Menu>
            </Route>
            

            <Route path="/average">
              <Average/>
            </Route>
          </Switch>

  </div>)

    
  return (
    <div className="App">
      <Switch>
        
      <Route path="/signUp">
                <SignUp/>
              </Route>

              <Route path="/" >
                <Login/>
              </Route>
            
            </Switch>
   


    </div>
  );
}

export default App;
