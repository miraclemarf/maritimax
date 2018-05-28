import { h, Component } from 'preact'
import { Modal, Button, Checkbox, Form, Image, Input, Divider, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { login } from '../../../actions'
import style from "./style";

class LoginModal extends Component {
    constructor(props) {
        super(props);

        // reset login status
        //this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false,
            open: false,
            textBtn: this.props.textBtn,
            styleBtn: this.props.styleBtn
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
    //state = { open: false }

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted, open, size } = this.state;
        return (
            <div>
                <Button style={this.state.styleBtn} onClick={this.show('mini')}>{this.state.textBtn}</Button>
                <Modal className={style.loginModal} size={size} open={open} onClose={this.close}>
                    <Modal.Header style={{ "border-bottom": "none" }}>
                        <div style={{ "padding-top": "1em", "padding-bottom": "1em" }}>
                            <Image src='/assets/images/logo2.svg' size='small' centered />
                        </div>
                    </Modal.Header>
                    <Modal.Content style={{ "padding": "0" }}>
                        <Form name="form" onSubmit={this.handleSubmit}>
                            <Form.Field className={style.field}>
                                <Input icon='user' iconPosition='left' type="email" name="username" value={username} onChange={this.handleChange} placeholder='Email' autocomplete="off" />
                            </Form.Field>
                            <Form.Field className={style.field}>
                                <Input icon='lock' iconPosition='left' type="password" name="password" value={password} onChange={this.handleChange} placeholder='Password' />
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
                    </Modal.Content>
                    <Modal.Actions style={{ "border": "0", "padding": "0 25px" }}>
                        <Divider style={{ "border-top-color": "#fff", "border-bottom": "0" }} />
                        <p style={{ "text-align": "center", "color": "#fff", "margin": "0" }}>
                            Dont Have Account ? <b>Register</b>
                        </p>
                        <Divider hidden />
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.auth;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(LoginModal);
