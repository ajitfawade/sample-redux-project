import * as React from 'react';
import { BasePage } from '../ReusableComponents/BasePage';
import { Async } from '../ReusableComponents/Async';
import { getUsers } from '../../services/UsersService';
import {Users} from './Users';

export default class Home extends React.PureComponent {
    static identifier = 'Users';
    render() {
        return (
            <BasePage>
                <Async
                    promise={getUsers}
                    content={<Users/>}
                    loader={<span>Loadidng...</span>}
                    error={<div>Error has occured</div>}
                    identifier={Home.identifier}
                />    
            </BasePage>
        );
    }
}
