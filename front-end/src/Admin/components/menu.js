import * as React from "react";
import { Logout ,Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import Customers from '../pages/customers.js';
import Average from '../pages/average.js';


const dataProvider = jsonServerProvider('http://localhost:3000/menu/');
const LogoutButton = props=><Logout {...props} />;
function Menu() {
       if (!localStorage.getItem('auth'))
         window.location.href = "http://localhost:3000/";
       else
       return (

<Admin logoutButton={LogoutButton} Average={false} dataProvider={dataProvider}  >
<Resource name="Customers" list={Customers} />
       <Resource name="Average" list={Average} />
       
       <button>logout</button>
</Admin>
       );
}

export default Menu;