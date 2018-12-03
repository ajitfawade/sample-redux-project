import * as React from 'react';

export interface IDynamicImportState {
    component: any;
}

export interface IDynamicImportProps {
    load: () => Promise<any>;
    children?: any;
}

export class DynamicImport extends React.Component<IDynamicImportProps, IDynamicImportState> {

    state = {
        component: null,
    };

    componentDidMount() {
        this.props.load().then(component => {
            this.setState({
                component: component.default
            });
        });
    }

    render() {
        return this.props.children(this.state.component);
    }

}
