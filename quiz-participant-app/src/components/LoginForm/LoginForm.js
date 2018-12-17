import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { reduxForm, Field } from 'redux-form';
import { InputField } from 'react-semantic-redux-form';
import { Form, Button } from 'semantic-ui-react'

import { setTeam } from '../../store/reducers/TeamReducer';
import { showFader, hideFader } from '../../store/reducers/AppReducer';

import {post} from '../../utils/ApiUtils'

import './LoginForm.scss';


class LoginForm extends Component {

    submitData = (data) => {


        console.log(data);    
        this.props.showFader();
        post('participant/register', data, (id) => {
            this.props.setTeam(
                {
                    id: id,
                    name: data.name,
                    firstParticipant: data.firstPersonName,
                    secondParticipant: data.secondPersonName
                }
            );
            this.props.hideFader();
        });    

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
                            name='name'
                            component={InputField}
                            placeholder='Team name'
                            autoComplete='off'
                        />


                        <Field
                            name='firstPersonName'
                            component={InputField}
                            placeholder='First participant name' />

                        <Field
                            name='secondPersonName'
                            component={InputField}
                            placeholder='Second participant name' />

                        <Button
                            type="submit"
                            fluid
                            positive
                            onClick={handleSubmit(this.submitData)}
                        >
                            Join
                        </Button>
                    </Form>
                </div>
                {!_.isNull(this.props.teamId) && <Redirect to='/app' />}
            </div>
        );
    }
}

const form = reduxForm({
    form: 'loginForm'
})(LoginForm);

const mapStateToProps = (state) => {
    return {
        teamId: state.team.id
    }
}

const mapDispatchToProps = {
    setTeam,
    showFader,
    hideFader
}

export default connect(mapStateToProps, mapDispatchToProps)(form);
