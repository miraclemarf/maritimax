
import { h, Component } from 'preact';
import { connect } from 'react-redux';
import { get_booking, get_user } from '../../actions';
import style from './style';
import _ from 'lodash';
import moment from 'moment';
import { Segment, Container, Grid, Menu, Divider,  Header, Table  } from 'semantic-ui-react';

class ListBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'booking', 
            'booking': [],
        };
    };

    componentDidMount() {
        this.props.get_booking();
        this.props.get_user();
    }
    renderBookingData(){

        console.log(this.props.booking.data);
        
        if(!_.isEmpty(this.props.booking.data)){
            return _.map( this.props.booking.data, booking => {
                return (
                    <Table.Row>
                        <Table.Cell>{moment(booking.created_at.date).format('DD MMM YYYY kk:mm:ss')}</Table.Cell>
                        <Table.Cell>{booking.cargo}</Table.Cell>
                        <Table.Cell>{booking.capacity}Kg</Table.Cell>
                        <Table.Cell className={booking.booking_status}>{booking.booking_status}</Table.Cell>
                    </Table.Row>
                );
            });
        }
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
                                    <Header as='h1' size='large' style={{'color':'#0577CB'}}>Booking</Header>
                                    <Divider hidden />
                                    <Table celled size='large' className={'table-maritim'}>
                                        <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>Transaksi Dibuat</Table.HeaderCell>
                                            <Table.HeaderCell>Produk</Table.HeaderCell>
                                            <Table.HeaderCell>Capacity</Table.HeaderCell>
                                            <Table.HeaderCell>Status</Table.HeaderCell>
                                        </Table.Row>
                                        </Table.Header>
                                        <Table.Body>
                                            {this.renderBookingData()}
                                        </Table.Body>
                                     </Table>
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
        auth: state.auth,
        booking: state.booking
    };
}

export default connect(mapStateToProps, {
    get_user,
    get_booking
})(ListBooking);