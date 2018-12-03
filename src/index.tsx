import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { DynamicImport } from './components/ReusableComponents/DynamicImport';

const Home = (props) => (
    <DynamicImport load={() => import('./components/Home/index')}>
        {
            (Component) => Component !== null ? <Component {...props} /> : <h1>Loading...</h1>
        }
    </DynamicImport>
);

const AboutUs = (props) => (
    <DynamicImport load={() => import('./components/AboutUs/index')}>
        {
            (Component) => Component !== null ? <Component {...props} /> : <h1>Loading...</h1>
        }
    </DynamicImport>
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route
                    exact path="/"
                    component={Home}
                />
                <Route
                    exact path="/aboutus"
                    component={AboutUs}
                />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
