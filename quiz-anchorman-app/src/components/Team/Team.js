
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import './Team.scss'

class Team extends Component {


    render() {

        const { teamName, firstParticipantName, secondParticipantName } = this.props;

        return (
            <Grid.Column width={4}>
                <div className="container-team">
                    <div className='team'>
                        <div className='container-team-name'>
                            {teamName}
                        </div>
                        <div className='container-team-participants'>
                            <div className='team-participant'>
                                <div className='team-participant-icon'>
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <div className='team-participant-name'>
                                    {firstParticipantName}
                                </div>
                            </div>
                            <div className='team-participant'>
                                <div className='team-participant-icon'>
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <div className='team-participant-name'>
                                    {secondParticipantName}
                                </div>
                            </div>
                        </div>
                        <div className='container-team-informations'>
                            <div className='team-response-time'>

                            </div>
                        </div>
                    </div>
                </div>
            </Grid.Column>
        )
    }
}

export default Team;