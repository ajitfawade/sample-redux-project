import * as React from 'react';
import {UserModel} from '../../Models/UserModel';
import { connect, DispatchProp } from 'react-redux';
import { withRouter } from 'react-router-dom';

export interface IUsersProps extends DispatchProp<any> {

}

export interface IUserState {

}

class UsersImpl extends React.PureComponent<IUsersProps, IUserState>{
    constructor(props: IUsersProps) {
        super(props);
    }

    static defaultProps: IUsersProps;
    identifier = 'Users';

    render() {
        return(
            <>
                <div>Here goes the list of users</div>
            </>
        );
    }
}

function mapStateToProps(state) {
    const users = UserModel.list();
    return {
        users
    };
}

export const Users = withRouter(connect<{}, {}, IUsersProps >(mapStateToProps) (UsersImpl));