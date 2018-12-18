import React, { Component } from 'react';
import { connect } from 'react-redux';

import './SpaceButton.scss';


import {put} from '../../utils/ApiUtils'

class SpaceButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sended: false,
            keyDown: false,
            sending: false
        }
    }

    componentDidMount = () => {
        document.addEventListener('keydown', this.handleKeyDown)
    }

    animateSpaceBar = () => {
        this.setState((state) => ({ ...state, sending: true, keyDown: true}));
            setTimeout(() => {
                this.setState((state) => ({ ...state, sending: false}));
            }, 200)
    }

    handleKeyDown = (e) => {
        if (e.code === 'Space' && !this.state.sended && !this.state.keyDown) {            
            this.animateSpaceBar();

            put(`participant/vote/${this.props.teamId}`, null, () => {
                this.setState((state) => ({ ...state, sended: true}));
            })
        }
    }

    getMessage = () => {
        if (this.state.sended) {
            return 'Voted!';
        } else {
            return 'Press the spacebar to vote';
        }
    }

    render() {
        return (
            <div className='container-space-button'>
                <div className='space-button'>
                    <div className='space-button-header'>
                        {this.getMessage()}
                    </div>
                    <div className='container-space-button-icon'>
                        <div className={`space-button-icon ${this.state.sended && 'sended'} ${this.state.sending && 'sending'}`}>
                            <i className="fas fa-keyboard"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.app.status,
        teamId: state.team.id
    }
}

export default connect(mapStateToProps)(SpaceButton);