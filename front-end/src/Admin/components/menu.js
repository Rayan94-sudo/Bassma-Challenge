import * as React from "react";
import { Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import Customers from '../pages/customers.js';
import Average from '../pages/average.js';
import LogoutButton from './LogoutButton.js'

const dataProvider = jsonServerProvider('http://localhost:3000/menu/');

function Menu() {
       // if (!localStorage.getItem('auth'))
       //   window.location.href = "http://localhost:3000/";
       // else
       return (

<Admin  Average={false} dataProvider={dataProvider} title="Admin Panel" >
<Resource name="Customers" list={Customers} />
       <Resource name="Average" list={Average} />
       <Resource name="Logout" list={LogoutButton} />
      
</Admin>
       );
}

export default Menu;