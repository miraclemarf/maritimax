
import { h, Component } from 'preact';
import { connect } from 'react-redux';
import { get_user } from '../../actions';
import style from './style';
import moment from 'moment';
import { Segment, Container, Grid, Menu, Divider, Card, Button } from 'semantic-ui-react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {activeItem: 'profile'};
    };

    componentDidMount() {
        this.props.get_user();
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    renderUserMenu(){
        
        const { activeItem } = this.state;
        return(
        <Menu size='large' fluid vertical >
        <Menu.Item href='/user' name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick}>
          User Profile
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
    get_user
})(User);