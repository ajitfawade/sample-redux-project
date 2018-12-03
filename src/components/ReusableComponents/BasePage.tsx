import * as React from 'react';
import { NavBar } from '../Nav';

export class BasePage extends React.Component<{ className?: string; style?: React.CSSProperties }> {

    static defaultProps = {
        style: {}
    };

    render() {
        const { className, children, style } = this.props;
        return (<div
            className={`page ${className || ``}`}
            style={{
                ...styles.basePage,
                ...style,
            }}
        >
            <NavBar />
            <div className="layout-children">
                {children}
            </div>
        </div>);
    }
}

const styles = {
    basePage: {
        display: 'flex',
        flexDirection: 'column' as any,
    }
};
