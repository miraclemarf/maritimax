import { h, Component } from 'preact'
import { Button, Divider, Label, Icon, Transition, Message } from 'semantic-ui-react'
import { Form, Input } from 'formsy-semantic-ui-react';
import { connect } from 'react-redux'

import _ from 'lodash';
import { register } from '../../../../actions'
import style from "./style";

class Register extends Component {
    constructor(props) {
        super(props);

        // reset login status
        //this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            email: '',
            password: '',
            submitted: false,
            error: false,
            errorMsg: '',
            visible: false

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onValidSubmit = this.onValidSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, email, password } = this.state;
        const { dispatch } = this.props;
        if (username && email && password) {
            dispatch(register(username, email, password));
        }

    }
    onValidSubmit(formData) {
        this.setState({ submitted: true });
        const { username, email, password } = this.state;
        const { dispatch } = this.props;
        if (username && email && password) {
            dispatch(register(username, email, password));
        }
    }
    componentWillReceiveProps(nextProps) {
        if (!_.isEmpty(nextProps.error)) {
            if (!_.isEmpty(nextProps.error.message)) {
                this.setState({ error: true, errorMsg: nextProps.error.message });
            }
        }
    }
    //state = { open: false }

    render() {
        const visible = this.props.visible;
        return (
            <Transition visible={visible} animation='slide left' duration={500}>
                <div>
                    <Form autoComplete="off" name="register" onValidSubmit={this.onValidSubmit}>
                        <p style={{ "color": "#fff", "margin": "0", "text-align": "center", "font-size": "1.2em" }}>
                            Create <b>Maritimax Account</b>
                        </p>
                        <Divider hidden />
                        {
                            this.state.error ?
                                <Message negative>
                                    <Message.Header>{this.state.errorMsg}</Message.Header>
                                </Message>
                                : ''
                        }
                        <Form.Field className={style.field}>
                            <Input required icon='user' iconPosition='left' type="text" name="username" onChange={this.handleChange} placeholder='Username' autocomplete="off" errorLabel={<Label color="red" pointing />} validationErrors={{
                                isDefaultRequiredValue: 'Username is Required',
                            }} />
                        </Form.Field>
                        <Form.Field className={style.field}>
                            <Input required icon='mail' iconPosition='left' type="email" name="email" onChange={this.handleChange} placeholder='Email' autocomplete="off" validations="isEmail" errorLabel={<Label color="red" pointing />} validationErrors={{
                                isEmail: 'Email is invalid',
                                isDefaultRequiredValue: 'Email is Required',
                            }} />
                        </Form.Field>
                        <Form.Field className={style.field}>
                            <Input required icon='lock' iconPosition='left' type="password" name="password" onChange={this.handleChange} placeholder='Password' errorLabel={<Label color="red" pointing />} validationErrors={{
                                isDefaultRequiredValue: 'Password is Required',
                            }} />
                        </Form.Field>
                        <Divider hidden />
                        <Button fluid style={{ 'color': '#0577cb', 'background': 'white' }} type='submit'>Create New a Account</Button>
                        <Divider style={{ "margin": ".5em 0" }} hidden />
                        <Button fluid color='google plus'><Icon name='google' /> Register with <b>Google</b></Button>
                        <Divider style={{ "margin": ".5em 0" }} hidden />
                        <p style={{ "color": "#fff", "margin": "0", "font-size": ".88em" }}>
                            By creating an account, you agree to our <a href="/terms-condition" style={{ 'color': '#fff', 'font-weight': '700' }}>terms of service</a>
                        </p>
                        <Divider hidden />
                    </Form>
                </div>
            </ Transition>
        )
    }
}
function mapStateToProps(state) {
    const { loggingIn, error } = state.auth;
    return {
        loggingIn, error
    };
}

export default connect(mapStateToProps)(Register);