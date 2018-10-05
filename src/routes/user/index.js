
import { h, Component } from 'preact';
import { connect } from 'react-redux';
import { get_user, change_password } from '../../actions';
import style from './style';
import moment from 'moment';
import { Segment, Container, Grid, Menu, Divider,  Button, Form, Message, Header  } from 'semantic-ui-react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'profile', 
            old_password: '',
            new_password:'',
            confirm_password:'',
            message:'',
            messageHabit:'negative',
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(e, { name, value }) {
        this.setState({ ...this.state, [name]: value });

    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.new_password == this.state.confirm_password){
            this.setState({ submitted: true });
            this.props.change_password(this.state.old_password , this.state.new_password );
        }
        else{
            this.setState({
                message : 'Confirm Password do not match',
                messageHabit:'negative'
            });
        }        
    }

    componentDidMount() {
        this.props.get_user();
    }

    componentWillReceiveProps(nextProps) {      
        if(!_.isEmpty(nextProps.auth.error)){
            this.setState({
                message : nextProps.auth.error.data.message,
                messageHabit:'negative'
            });
        }
        if(!_.isEmpty(nextProps.auth.change)){
            this.setState({
                message : nextProps.auth.change.message,
                messageHabit:'positive'
            });
        }
        this.setState({ 
            old_password: '',
            new_password: '',
            confirm_password: '',
            submitted: false
        });        
       
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    renderUserMenu(){
        
        const { activeItem } = this.state;
        return(
        <Menu size='large' fluid vertical >
        <Menu.Item href='/user' name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick}>
          Change Password
        </Menu.Item>

        <Menu.Item href='/user/booking' name='booking' active={activeItem === 'booking'} onClick={this.handleItemClick}>
          Booking
        </Menu.Item>

        <Menu.Item href='/logout' name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick}>
          Logout
        </Menu.Item>
      </Menu>
      );
    }
    renderMainProduct() {
        if (!_.isEmpty(localStorage.getItem('user'))) {
            if (!_.isEmpty(this.props.product)) {
                return (
                    <ProductMain image_cargo={this.props.product.img_cargos} desc={this.props.product.description} />
                )
            }
        }
    }


    render() {
        var msgHabit = {};
        msgHabit[this.state.messageHabit]=true;
        if (_.isEmpty(this.props.auth.userData)) {
            return <div>Loading...</div>
        }
        return (
            <div style={{ 'padding-top': '5.5em', 'background-color': '#F4F4F4', 'border-bottom': '1px solid #DBDBDB' }}>
                <Segment style={{ 'padding': '0' }} basic>
                    <Container style={{ 'margin': '4em 0' }}>
                        <Grid columns={2} stackable>
                            <Grid.Column width={5}>
                            <div style={{ 'background-color': '#0577CB', 'padding': '2em', 'box-shadow': '0px 3px 6px 0px rgba(0,0,0,0.16)', 'border-radius': '8px' , 'color':'#fff'}}>
                                <h2 style={{'margin-bottom':'2px'}}>{this.props.auth.userData.name}</h2>
                                <small>Member since : {moment(this.props.auth.userData.created_at).format('DD MMMM YYYY')}</small>
                            </div>
                            <Divider hidden />
                            <div className={'usermenu'}>
                                {this.renderUserMenu()}
                            </div>

                            </Grid.Column>
                            <Grid.Column width={11}>
                                <div style={{ 'background-color': '#fff', 'padding': '2em', 'box-shadow': '0px 3px 6px 0px rgba(0,0,0,0.16)', 'border-radius': '8px', 'min-height':'500px' }}>
                                    <Header as='h1' size='large' style={{'color':'#0577CB'}}>Ubah Password</Header>
                                    <Divider hidden />
                                    {
                                        this.state.message != '' ?
                                            <Message {...msgHabit}>
                                                <Message.Header>{this.state.message}</Message.Header>
                                            </Message>
                                            : ''
                                    }
                                    <Divider hidden />
                                    <Form autoComplete="off" className={'form-nego'} onSubmit={this.handleSubmit}>
                                        <div style={{'max-width':'40%'}} className={'use-caption w-margin'}>
                                            <Form.Input required name='old_password' onChange={this.handleChange} type='password' value={this.state.old_password} required fluid label='Old Password' />
                                        </div>
                                        <Divider hidden />
                                        <div style={{'max-width':'40%'}} className={'use-caption w-margin'}>
                                            <Form.Input required name='new_password' onChange={this.handleChange} value={this.state.new_password} type='password' required fluid label='New Password' />
                                        </div>
                                        <Divider hidden />
                                        <div style={{'max-width':'40%'}} className={'use-caption w-margin'}>
                                            <Form.Input required name='confirm_password' onChange={this.handleChange} type='password' value={this.state.confirm_password} required fluid label='Confirm New Password' />
                                        </div>
                                        <Divider hidden />
                                        <Button fluid style={{ 'background-color': '#0577CB', 'color': '#fff', 'margin-bottom': '8px', 'max-width': '40%', 'margin':'0 auto' }} type='submit'>Save Change</Button>
                                    </Form>            
                                </div>
                            </Grid.Column>
                        </Grid>

                        <Divider hidden />
                    </Container>
                </Segment>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps, {
    get_user,
    change_password
})(User);