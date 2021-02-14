import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import ShopHeader from '../shop-header';
import {HomePage, CartPage} from '../pages';

import './app.css';

const App = ({theme}) => {
    const style = {
        backgroundColor: theme === 'dark' ? '#363c48' : '#fff',
        color: theme === 'dark' ? '#fff' : '#363c48',
    };
    return (
        <main role="main" className="container" style={style}>
            <ShopHeader />
            <Switch>
                <Route path="/" component={HomePage} exact />

                <Route path="/cart" component={CartPage} />
            </Switch>
        </main>
    );
};

const mapStateToProps = ({theme}) => ({
    theme,
});
export default connect(mapStateToProps)(App);
