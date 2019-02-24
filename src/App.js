import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from  'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'
import Modal from './components/Modal'


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <React.Fragment>
            <Navbar />
            <Switch>
              <Route exact path='/' component={ProductList} />
              <Route path='/details' component={Details} />
              <Route path='/cart' component={Cart} />
              <Route component={Default} />
            </Switch>
            <Modal />
          </React.Fragment>
        </BrowserRouter>
    );
  }
}

export default App;
