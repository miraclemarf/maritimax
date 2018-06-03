import { h, Component } from 'preact'
import { Button, Checkbox, Form, Image, Input, Divider, Icon, Transition } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { login } from '../../../../actions'
import style from "./style";

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

    render() {
        //const { username, password, submitted } = this.state;
        const visible = this.props.visible

        const handleToogle = this.props.handleToogle;
        return (

            <Transition visible={visible} animation='slide left' duration={150}>
                <div>
                    <Form autoComplete="off" name="form" onSubmit={this.handleSubmit}>
                        <Form.Field className={style.field}>
                            <Input icon='user' iconPosition='left' type="email" name="username" onChange={this.handleChange} placeholder='Email' autocomplete="off" />
                        </Form.Field>
                        <Form.Field className={style.field}>
                            <Input icon='lock' iconPosition='left' type="password" name="password" onChange={this.handleChange} placeholder='Password' />
                        </Form.Field>
                        <Divider hidden />
                        <Button fluid style={{ 'color': '#0577cb', 'background': 'white' }} type='submit'>LOGIN</Button>
                        <Divider style={{ "margin": ".5em 0" }} hidden />
                        <Button fluid color='google plus'><Icon name='google' /> Sign in with <b>Google</b></Button>
                        <Divider style={{ "margin": ".5em 0" }} hidden />
                        <p style={{ "text-align": "center", "color": "#fff", "margin": "0" }}>
                            Forgot Password?
                            </p>
                    </Form>
                    <Divider style={{ "border-top-color": "#fff", "border-bottom": "0", "margin-left": "25px", "margin-right": "25px" }} />
                    <p style={{ "text-align": "center", "color": "#fff", "margin": "0" }}>
                        Dont Have Account ? <b onClick={() => handleToogle('test')} > Register</b>
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