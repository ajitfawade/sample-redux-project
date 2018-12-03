import * as React from 'react';
import { BasePage } from '../ReusableComponents/BasePage';
import { Async } from '../ReusableComponents/Async';

export default class Home extends React.PureComponent {
    static identifier = 'Users';
    render() {
        return (
            <BasePage>
                <Async
                    promise={null}
                    content={<DeveloperDetail Developer={Dev} open={open} />}
                    loader={<span>Loadidng...</span>}
                    error={<div>Error has occured</div>}
                    identifier={Home.identifier}
                />    
            </BasePage>
        );
    }
}
