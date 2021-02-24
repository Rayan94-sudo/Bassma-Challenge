/* eslint-disable no-useless-constructor */
import {React,Component} from "react";
import { Route, Switch } from 'react-router-dom';
import Signup from './Auth/pages/signup.js'
 import Login from './Auth/pages/login';
import Menu from './Admin/components/menu';
import PrivateRoute from './Auth/componets/PrivateRoute.js';
import AdminRoute from './Auth/componets/AdminRoute.js'
import ThanksPage from './Customer/pages/thanksPage.js'
class App extends Component {

constructor(props) {
  super (props);
  
}
render(){
  return (
    <div className="App">
    <Switch>
    <Route path="/" component={Login} exact />
    <Route path="/login" component={Login} exact />
    <Route path="/signup" component={Signup} exact />
          
    <AdminRoute path="/menu" component={Menu}/>
    <PrivateRoute path="/thanks" component={ThanksPage}/>
  </Switch>

    </div>
  );
}
}

export default App;
