import { h, Component } from 'preact'
import { Button, Checkbox, Form, Input, Divider, Icon, Transition } from 'semantic-ui-react'
import { connect } from 'react-redux'
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
            visible: false

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
        const { username, email, password } = this.state;
        const { dispatch } = this.props;
        if (username && email && password) {
            dispatch(register(username, email, password));
        }

    }
    //state = { open: false }

    render() {
        const visible = this.props.visible;
        return (
            <Transition visible={visible} animation='slide left' duration={500}>
                <div>
                    <Form name="register" onSubmit={this.handleSubmit}>
                        <p style={{ "color": "#fff", "margin": "0", "text-align": "center", "font-size": "1.2em" }}>
                            Create <b>Maritimax Account</b>
                        </p>
                        <Divider hidden />
                        <Form.Field className={style.field}>
                            <Input icon='user' iconPosition='left' type="text" name="username" onChange={this.handleChange} placeholder='Username' autocomplete="off" />
                        </Form.Field>
                        <Form.Field className={style.field}>
                            <Input icon='mail' iconPosition='left' type="email" name="email" onChange={this.handleChange} placeholder='Email' autocomplete="off" />
                        </Form.Field>
                        <Form.Field className={style.field}>
                            <Input icon='lock' iconPosition='left' type="password" name="password" onChange={this.handleChange} placeholder='Password' />
                        </Form.Field>
                        <Divider hidden />
                        <Button fluid style={{ 'color': '#0577cb', 'background': 'white' }} type='submit'>Create New a Account</Button>
                        <Divider style={{ "margin": ".5em 0" }} hidden />
                        <Button fluid color='google plus'><Icon name='google' /> Register with <b>Google</b></Button>
                        <Divider style={{ "margin": ".5em 0" }} hidden />
                        <p style={{ "color": "#fff", "margin": "0", "font-size": ".88em" }}>
                            By creating an account, you agree to our <b>terms of service</b>
                        </p>
                        <Divider hidden />
                    </Form>
                </div>
            </ Transition>
        )
    }
}
function mapStateToProps(state) {
    const { loggingIn } = state.auth;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(Register);