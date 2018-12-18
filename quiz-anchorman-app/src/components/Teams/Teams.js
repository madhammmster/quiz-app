import React, { Component } from 'react';
import { connect } from 'react-redux';


import { setTeams } from '../../store/reducers/TeamsReducer';

import { Grid } from 'semantic-ui-react';

import './Teams.scss';
import Team from '../Team/Team';
import Controls from '../Controls/Controls';


class SpaceButton extends Component {

    render() {
        const teams = this.props.teams;

        if (teams && teams.length !== 12) {
            for (var i = 1; i < 12; i++) {
                teams.push(teams[0]);
            }
        }

        console.log('teams', teams)

        return (
            <div className='container-teams'>
                <div className='teams'>
                    <Grid>
                        {teams && teams.map((team, index) => { return (<Team index={index} key={'team_' + index} teamName={team.name} firstParticipantName={team.firstPersonName} secondParticipantName={team.secondPersonName} />) })}
                    </Grid>
                </div>
                <Controls />
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
    setTeams
}

export default connect(mapStateToProps, mapDispatchToProps)(SpaceButton);