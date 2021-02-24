
import * as React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';

function handleClick(){
    localStorage.clear();
    window.location.href = "http://localhost:3000/login";
}
function MyLogoutButton () {
   
    return (
        <MenuItem
            onClick={handleClick}
            
        >
            <ExitIcon /> Logout
        </MenuItem>
    );
}

export default MyLogoutButton;