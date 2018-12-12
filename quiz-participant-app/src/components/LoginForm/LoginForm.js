import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { reduxForm, Field } from 'redux-form';
import { InputField } from 'react-semantic-redux-form';
import { Form, Button } from 'semantic-ui-react'

import { setTeam } from '../../store/reducers/TeamReducer';
import { showFader, hideFader } from '../../store/reducers/AppReducer';

// import {post, get} from '../../utils/ApiUtils'

import './LoginForm.scss';


class LoginForm extends Component {

    submitData = (data) => {


        console.log(data);
        // get('api/users', this.props.setUser)
        // post('api/account/authenticate', data, this.props.setUser);  
        // pass Q!w2e3r4

        this.props.showFader();

        setTimeout(() => {
            this.props.hideFader();
            this.props.setTeam(data);
        }, 1000)

    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="container-login-form">
                <div className="login-form">
                    <Form
                        autoComplete='off'
                    >

                        <Field
                            name='teamName'
                            component={InputField}
                            placeholder='Team name'
                            autoComplete='off'
                        />


                        <Field
                            name='firstParticipant'
                            component={InputField}
                            placeholder='First participant name' />

                        <Field
                            name='secondParticipant'
                            component={InputField}
                            placeholder='Second participant name' />

                        <Button
                            type="submit"
                            fluid
                            positive
                            onClick={handleSubmit(this.submitData)}
                        >Join</Button>
                    </Form>
                </div>
                {!_.isNull(this.props.team) && <Redirect to='/app' />}
            </div>
        );
    }
}

const form = reduxForm({
    form: 'loginForm'
})(LoginForm);

const mapStateToProps = (state) => {
    return {
        team: state.team.team
    }
}

const mapDispatchToProps = {
    setTeam,
    showFader,
    hideFader
}

export default connect(mapStateToProps, mapDispatchToProps)(form);
