import * as React from 'react';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Home from './components/home';
import Cart from './components/cart';
import ProductDetails from './shared/productDetails';

export default () => (
    <Dashboard></Dashboard>
    // <Router>
    //     <Route exact path='/app' component={Dashboard} />
    //     {/* <Route exact path='/Cart' component={Cart} />
    //     <Route exact path='/productDetails/:id' component={ProductDetails}/> */}
    // </Router>
);
