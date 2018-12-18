
import React, { Component } from 'react';
import SockJS from 'sockjs-client';
import Teams from '../../components/Teams/Teams';


class App extends Component {

  componentDidMount = () => {

    var sock = new SockJS('http://localhost:8080');

    sock.onopen = function () {
      console.log('open');
      
    };

    sock.onmessage = function (e) {
      console.log('message', e.data);
      sock.close();
    };

    sock.onclose = function () {
      console.log('close');
    };

  }

  render() {
    return (
      <div className='route app-route' >
        <Teams />
        
      </div>
    );
  }
}


export default App;