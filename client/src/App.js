//LIBRARIES
  //REACT
import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
  //REDUX
import { connect } from 'react-redux';
  //RESELECT
import { createStructuredSelector } from 'reselect';
  

//COMPONENTS
//PAGES
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
//COMPONENTS
import Header from './components/header/header.component';
//STYLES
import './App.css';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={
            () => currentUser ? 
            (<Redirect to='/' />) : (<SignInAndSignUpPage/>)
            } />
        </Switch>
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);