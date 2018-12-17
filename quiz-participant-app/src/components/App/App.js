import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from "react-router-dom";


import './App.scss';

import { startApp } from '../../store/reducers/AppReducer';

import Fader from '../Fader/Fader';
import Login from '../../routes/Login/Login';
import MainApp from '../../routes/MainApp/MainApp';
import Snow from '../Snow/Snow';

class App extends Component {

  componentDidMount() {
    this.props.startApp();
  }

  render() {
    return (
      <div className="App">
        <Snow />
        <Route path='/' exact component={Login} />
        <Route path='/app' component={MainApp} />
        <Fader />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    started: state.app.started
  }
}

const mapDispatchToProps = {
  startApp
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

