import React, { Component } from 'react';
import { connect } from 'react-redux';

import './TeamBar.scss';

class TeamBar extends Component {

    render() {
        return (
            <div className='container-team-bar'>
                <div className='team-bar'>
                    <div className='team-name'>
                        {this.props.team.name}
                    </div>
                    
                    <div className='container-participant'>
                        <div className='participant'>
                            <div className='participant-icon'>
                                <i className="fas fa-user"></i>
                            </div>
                            <div className='participant-name'>
                                {this.props.team.firstParticipant}
                            </div>
                        </div>

                        <div className='participant'>
                            <div className='participant-icon'>
                                <i className="fas fa-user"></i>
                            </div>
                            <div className='participant-name'>
                                {this.props.team.secondParticipant}
                            </div>
                        </div>
                    </div>

                
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        team: state.team
    }
}

export default connect(mapStateToProps)(TeamBar);