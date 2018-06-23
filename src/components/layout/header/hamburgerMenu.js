import { h, Component } from 'preact';
import { BrowserRoute, Link } from 'react-router-dom';
import { Menu, Icon, Sidebar, Button, Dropdown } from 'semantic-ui-react';
import LoginModal from '../../fragment/loginModal';
import style from './style';


export default class HamburgerMenu extends Component {
    constructor(props) {
        super(props);

        // reset login status
        //this.props.dispatch(userActions.logout());

        this.state = {
            visible: false,
            userData: this.props.userData
        };

    }
    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    render() {

        const { visible, userData } = this.state
        return (
            <div style={{ 'margin-top': '60%' }}>
                <div onClick={this.toggleVisibility} style={{ 'margin-right': '10px' }}>
                    <Icon inverted name='sidebar' size='big' />
                </div>
                <Sidebar.Pushable style={{
                    'position': 'absolute',
                    'left': '0',
                    'top': '78px',
                    'height': '300px'
                }}>
                    <Sidebar as={Menu} animation='overlay' direction='top' visible={visible} inverted style={{
                        'background-color': '#0577cb'
                    }}>
                        <Sidebar.Pusher>
                            <Menu.Item> <Link to="/">Home</Link></Menu.Item>
                            <Menu.Item>   <a href="/search?booking_type=charter">Penyewaan</a></Menu.Item>
                            <Menu.Item>   <a href="/search?booking_type=buy">Jual Beli</a></Menu.Item>
                            <Menu.Item>   <a href="/news">News</a></Menu.Item>
                            <Menu.Item>   <Link to="/about">About Us</Link></Menu.Item>
                            <Menu.Item>   <Link to="/contact">Contact Us</Link></Menu.Item>
                            {

                                !localStorage.getItem('user') ?
                                    <Menu.Item >
                                        <LoginModal textBtn={'Log-in'} styleBtn={{ 'color': '#0577cb', 'background': 'white', 'min-width': '150px' }} />
                                    </Menu.Item>
                                    :
                                    <Menu.Item>
                                        <Dropdown className={style.username} text={userData} floating button>
                                            <Dropdown.Menu>
                                                {/* <Dropdown.Item>Important</Dropdown.Item> */}
                                                {/* <Dropdown.Item><a href="/user/booking">Booking</a></Dropdown.Item> */}
                                                <Dropdown.Item><a href="/logout">Logout</a></Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Menu.Item>
                            }
                        </Sidebar.Pusher>
                    </Sidebar>
                </Sidebar.Pushable>
            </div>
        )

    }
}