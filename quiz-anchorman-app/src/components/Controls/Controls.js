import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faPlay, faBan } from '@fortawesome/free-solid-svg-icons';
import { setTeams } from '../../store/reducers/TeamsReducer';
import { showFader, hideFader, setWaitingForVote, setWaitingForQuestion } from '../../store/reducers/AppReducer';
import { AppStatus } from '../../utils/Enums';

import { get, post } from '../../utils/ApiUtils';

import './Controls.scss'

class Controls extends Component {

    // componentDidMount = () => {
    //     this.getTeams();
    // }

    getTeams = () => {
        this.props.showFader();
        get('admin/participants', (data) => {
            this.props.hideFader();
            this.props.setTeams(data);
        })
    }

    startQuestion = () => {

        post('admin/start', {}, (data) => {
            this.props.setWaitingForVote();
            console.log('start', data)
        })
    }

    stopQuestion = () => {
        get('admin/results', (data) => {
            this.props.setWaitingForQuestion();
            console.log('stop question', data)
        })
    }

    renderStartQuestionControls = () => {
        return (
            <React.Fragment>
                <div className='container-control' onClick={this.getTeams}>
                    <FontAwesomeIcon icon={faSyncAlt} />
                </div>
                <div className='container-control' onClick={this.startQuestion}>
                    <FontAwesomeIcon icon={faPlay} />
                </div>
            </React.Fragment>
        )
    }

    renderStopQuestionControls = () => {
        return (
            <div className='container-control' onClick={this.stopQuestion}>
                <FontAwesomeIcon icon={faBan} />
            </div>
        )
    }

    render() {

        const { status } = this.props;

        return (
            <div className='container-controls'>
                <div className='controls'>
                    {
                        (status === AppStatus.WAITING_FOR_QUESTION) ?
                            this.renderStartQuestionControls() :
                            this.renderStopQuestionControls()
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.app.status,
        teams: state.teams.teams
    }
}

const mapDispatchToProps = {
    setTeams,
    showFader,
    hideFader,
    setWaitingForVote,
    setWaitingForQuestion
}



export default connect(mapStateToProps, mapDispatchToProps)(Controls);