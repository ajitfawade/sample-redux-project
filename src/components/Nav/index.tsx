import * as React from 'react';
import { NavLink } from 'react-router-dom';

export class NavBar extends React.PureComponent {
    render() {
        return (<div style={{ display: 'flex', height: '40px', fontSize: '14px', alignItems: 'center' }}>
            <NavLink activeStyle={{ backgroundColor: "green",  }} to="/" style={{ cursor: 'pointer', width: '50px', border: 'solid 2px' }}>Home</NavLink>
            <NavLink to="/aboutus" activeStyle={{ backgroundColor: "green",  }}
                style={{ cursor: 'pointer', width: '50px', border: 'solid 2px', marginLeft: '21px' }}>
                About Us
            </NavLink>
        </div>);
    }
}
