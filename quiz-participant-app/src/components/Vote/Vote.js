import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppStatus } from '../../utils/Enums';

import './Vote.scss'

import SpaceButton from '../SpaceButton/SpaceButton';





class App extends Component {

    renderWaitingForQuestion = () => {
        return (
            <div>
                Waiting for question
            </div>
        )
    }

    renderVoting = () => {
        return (
            <div>
                <SpaceButton />
            </div>
        )
    }

    render() {
        return (
            <div className='container-vote'>
                <div className='vote'>
                {
                    (this.props.status === AppStatus.WAITING_FOR_QUESTION) ?
                        this.renderWaitingForQuestion()
                        :
                        this.renderVoting()
                }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.app.status
    }
}

export default connect(mapStateToProps)(App);