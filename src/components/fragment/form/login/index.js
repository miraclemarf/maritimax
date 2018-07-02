import { h, Component } from 'preact'
import { Button, Divider, Label, Icon, Transition } from 'semantic-ui-react'
import { Form, Input } from 'formsy-semantic-ui-react';
import { connect } from 'react-redux'
import { login, googleLogin } from '../../../../actions'
import { GoogleLogin } from 'react-google-login';
import style from "./style";
import { required, email } from 'redux-form-validators'

class Login extends Component {
    constructor(props) {
        super(props);

        // reset login status
        //this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false,
            open: false,
            visible: true
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
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(login(username, password));
        }
    }

    onValidSubmit(formData) {
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(login(username, password));
        }
    }

    responseGoogle(response) {
        this.setState({ submitted: true });
        const { dispatch } = this.props;
        dispatch(googleLogin(response.accessToken));
    }

    render() {
        //const { username, password, submitted } = this.state;
        const visible = this.props.visible

        const handleToogle = this.props.handleToogle;
        return (

            <Transition visible={visible} animation='slide left' duration={150}>
                <div>
                    <Form autoComplete="off" name="form" onValidSubmit={this.onValidSubmit}>
                        <Form.Field className={style.field}>
                            <Input required icon='user' iconPosition='left' type="email" name="username" onChange={this.handleChange} placeholder='Email' validations="isEmail" autocomplete="off"
                                errorLabel={<Label color="red" pointing />} validationErrors={{
                                    isEmail: 'Email is invalid',
                                    isDefaultRequiredValue: 'Email is Required',
                                }} />
                        </Form.Field>
                        <Form.Field className={style.field}>
                            <Input required icon='lock' iconPosition='left' type="password" name="password" onChange={this.handleChange} placeholder='Password'
                                errorLabel={<Label color="red" pointing />} validationErrors={{
                                    isDefaultRequiredValue: 'Password is Required',
                                }} />
                        </Form.Field>
                        <Divider hidden />
                        <Button fluid style={{ 'color': '#0577cb', 'background': 'white' }} type='submit'>LOGIN</Button>
                        <Divider style={{ "margin": ".5em 0" }} hidden />
                        <GoogleLogin
                            clientId={'442332255212-vaehsnvf1k2vl4fpp4gavkttbljb3f5t.apps.googleusercontent.com'}
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            style={{ 'display': 'block', 'width': '100%', 'background': 'rgb(209, 72, 54)', 'color': '#fff', 'border-radius': '4px', 'border': 'transparent', 'padding': '10px 0', 'cursor': 'pointer' }}
                        >
                            <Icon name='google' /> Sign in with <b>Google</b>
                        </GoogleLogin>
                        <Divider style={{ "margin": ".5em 0" }} hidden />
                        <p style={{ "text-align": "center", "color": "#fff", "margin": "0" }}>
                            Forgot Password?
                            </p>
                    </Form>
                    <Divider style={{ "border-top-color": "#fff", "border-bottom": "0", "margin-left": "25px", "margin-right": "25px" }} />
                    <p style={{ "text-align": "center", "color": "#fff", "margin": "0" }}>
                        Dont Have Account ? <b onClick={() => handleToogle('test')} style={{ 'cursor': 'pointer' }}> Register</b>
                    </p>
                    <Divider hidden />
                </div>
            </Transition>
        )
    }
}
function mapStateToProps(state) {
    const { loggingIn } = state.auth;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(Login);