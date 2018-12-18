import React, { Component } from 'react';
import {Dimmer, Loader} from 'semantic-ui-react';
import {connect} from 'react-redux'; 

class Fader extends Component {
    render() {
        return (
            <Dimmer active={this.props.isFaderVisible} >
                <Loader>Loading</Loader>
            </Dimmer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isFaderVisible: state.app.isFaderVisible
    }
}

export default connect(mapStateToProps)(Fader);
