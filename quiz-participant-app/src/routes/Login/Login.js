import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

import './Login.scss'

import LoginForm from '../../components/LoginForm/LoginForm'


class App extends Component {

    render() {
        return (
            <div className='route login-route' >                
                <Container>
                    <Header as='h2'>                        
                        <Header.Content>
                            Christmas Quiz
                        </Header.Content>
                    </Header>
                    <LoginForm />
                </Container>
            </div>
        );
    }
}


export default App;