
import React, { Component } from 'react';
import SockJS from 'sockjs-client';
import Vote from '../../components/Vote/Vote';
import TeamBar from '../../components/TeamBar/TeamBar';


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
        <TeamBar />
        <Vote />
      </div>
    );
  }
}


export default App;