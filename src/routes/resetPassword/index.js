import { h, Component } from 'preact'
import { Button, Divider, Label, Message, Segment, Container } from 'semantic-ui-react'
import { Form, Input } from 'formsy-semantic-ui-react';
import { connect } from 'react-redux';

import { reset_password } from '../../actions'
import qs from 'query-string';

import style from "./style";
import _ from 'lodash';

class ResetPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            new_password: '',
            reset_token:'',
            submitted: false,
            error: false,
            errorMsg: ''

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onValidSubmit = this.onValidSubmit.bind(this);
    }
    componentDidMount() {

        const param = qs.parse(this.props.location.search);        
        this.setState({ 'reset_token': param.token });
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { new_password, reset_token } = this.state;
        const { dispatch } = this.props;
        if (new_password && reset_token) {
            /* ACTION CREATOR FOR SUBMIT API */
            dispatch(reset_password(new_password, reset_token));
        }

    }
    onValidSubmit(formData) {
        this.setState({ submitted: true });
        console.log(formData);
        
        const { new_password, reset_token } = this.state;
        const { dispatch } = this.props;
        
        if (new_password && reset_token) {
            /* ACTION CREATOR FOR SUBMIT API */
            dispatch(reset_password(new_password, reset_token));
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
            <div style={{ 'padding-top': '5.5em', 'background-color': '#fff', 'border-bottom': '1px solid #DBDBDB' }}>
                <Segment style={{ 'padding': '4em 0' }} basic>
                    <Container>
                <div style={{'background-color':'rgb(5, 119, 203)', 'max-width':'480px', 'padding':'1em', 'margin':'0 auto', 'border-radius':'8px'}}>
                    <Form autoComplete="off" name="resetPass" onValidSubmit={this.onValidSubmit}>
                        <Divider style={{ "margin": ".5em 0" }} hidden />
                        <p style={{ "color": "#fff", "margin": "0", "text-align": "center", "font-size": "1.2em" }}>
                            Reset Password <b>Maritimax Account</b>
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
                            <Input required icon='lock' iconPosition='left' type="password" name="new_password" onChange={this.handleChange} placeholder='Type your new password' autocomplete="off" errorLabel={<Label color="red" pointing />} validationErrors={{
                                isDefaultRequiredValue: 'Paswword is Required',
                            }} />
                        </Form.Field>
                        {<Input type="hidden" name="reset_token" onChange={this.handleChange} value={this.state.reset_token} />}
                        <Button fluid style={{ 'color': '#0577cb', 'background': 'white' }} type='submit'>Submit</Button>
                        <Divider style={{ "margin": ".5em 0" }} hidden />
                        <Divider hidden />
                    </Form>
                </div>
                </Container>
                </Segment>
                </div>

        )
    }
}
function mapStateToProps(state) {
    
    const { error, message } = state.auth.reset != undefined ? state.auth.reset : '';
    return {
        error,
        message
    };
}
export default connect(mapStateToProps)(ResetPassword);
