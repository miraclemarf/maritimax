import { h, Component } from 'preact'
import { Button, Divider, Label, Icon, Transition, Message } from 'semantic-ui-react'
import { Form, Input } from 'formsy-semantic-ui-react';
import { connect } from 'react-redux'

import style from "./style";
import { forgot_password } from '../../../../actions'
import _ from 'lodash';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);

        // reset login status
        //this.props.dispatch(userActions.logout());

        this.state = {
            email: '',
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
        const { email } = this.state;
        const { dispatch } = this.props;
        if (email) {
            /* ACTION CREATOR FOR SUBMIT API */
            dispatch(forgot_password(email));
        }

    }
    onValidSubmit(formData) {
        this.setState({ submitted: true });
        const {  email } = this.state;
        const { dispatch } = this.props;
        
        if (email) {
            /* ACTION CREATOR FOR SUBMIT API */
            dispatch(forgot_password(email));
        }
    }
    componentWillReceiveProps(nextProps) {  
        
        if (!_.isEmpty(nextProps.error)) {
                this.setState({ error: true, errorMsg: nextProps.message });
        }
    }

    render() {
        const visible = this.props.visible;
        return (
            <Transition visible={visible} animation='slide left' duration={500}>
                <div>
                    <Form autoComplete="off" name="forgotPass" onValidSubmit={this.onValidSubmit}>
                        <p style={{ "color": "#fff", "margin": "0", "text-align": "center", "font-size": "1.2em" }}>
                            Forgot Your <b>Maritimax Account</b>
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
                            <Input required icon='mail' iconPosition='left' type="email" name="email" onChange={this.handleChange} placeholder='Email' autocomplete="off" validations="isEmail" errorLabel={<Label color="red" pointing />} validationErrors={{
                                isEmail: 'Email is invalid',
                                isDefaultRequiredValue: 'Email is Required',
                            }} />
                        </Form.Field>
                    
                        <Divider hidden />
                        <Button fluid style={{ 'color': '#0577cb', 'background': 'white' }} type='submit'>Send</Button>
                        <Divider style={{ "margin": ".5em 0" }} hidden />
                        {/* <p style={{ "color": "#fff", "margin": "0", "font-size": ".88em" }}>
                            By creating an account, you agree to our <a href="/terms-condition" style={{ 'color': '#fff', 'font-weight': '700' }}>terms of service</a>
                        </p> */}
                        <Divider hidden />
                    </Form>
                </div>
            </ Transition>
        )
    }
}

function mapStateToProps(state) {
    
    const { error, message } = state.auth.forgot != undefined ? state.auth.forgot : '';
    return {
        error,
        message
    };
}

export default connect(mapStateToProps)(ForgotPassword);