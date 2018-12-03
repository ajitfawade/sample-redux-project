import * as React from 'react';
import { executePromiseAction } from '../../actions/loadingActions';
import { IState } from '../../../interfaces';
import { connect } from 'react-redux';

export interface IAsyncState {
    isLoading?: boolean;
    hasError?: boolean;
}

interface IAsyncStoreProps {
    loadingState?: IAsyncState;
}

interface IASyncProps extends IAsyncStoreProps {
    promise: (...args: any[]) => any;
    identifier?: string;
    content: JSX.Element | JSX.Element[];
    error: JSX.Element | JSX.Element[];
    loader: JSX.Element | JSX.Element[];
    initialState?: IAsyncState;
}

class AsyncImpl extends React.PureComponent<IASyncProps, {}> {

    executePromise = () => {
        const { identifier, promise } = this.props;
        if (promise instanceof Function) {
            executePromiseAction(promise(), identifier);
        }
    }

    componentWillMount() {
        this.executePromise();
    }

    render() {
        const { props: { content, error, loader, loadingState } } = this;
        const { isLoading, hasError } = loadingState;
        if (isLoading && loader) {
            return loader;
        }
        if (!isLoading && !hasError) {
            return content;
        }
        if (hasError && error) {
            return error;
        }
    }
}

const mapStateToProps = (state: IState, ownProps: IASyncProps) => {
    const { identifier, initialState } = ownProps;
    return {
        loadingState: state.loading.get(identifier) || initialState || {},
    };
};

export const Async = connect<IAsyncStoreProps, {}, IASyncProps, {}>(mapStateToProps)(AsyncImpl);
