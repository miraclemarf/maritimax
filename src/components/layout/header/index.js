import { h, Component } from 'preact';
import { BrowserRoute, Link } from 'react-router-dom';
import LoginModal from '../../fragment/loginModal';
import { Container, Menu, Image, Dropdown, Responsive, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { get_user } from '../../../actions'
import HamburgerMenu from './hamburgerMenu';
import style from './style';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    this.props.get_user();
  }

  render() {
    return (
      <Menu style={{
        'background-color': '#0577cb',
        'box-shadow':' 0px 6px 6px rgba(0,0,0,.16)'
      }} fixed='top' inverted secondary>
        <Container>
          <Menu.Item as='a' href='/' header>
            <Image src='/assets/images/logo2.svg' as='a' size='small' to='/' />
          </Menu.Item>
          <Responsive as={Menu.Menu} position='right' minWidth={992}>
            <Menu.Item> <a href="/">Home</a></Menu.Item>
            <Menu.Item>   <a href="/search?booking_type=charter">Penyewaan</a></Menu.Item>
            <Menu.Item>   <a href="/search?booking_type=buy">Jual Beli</a></Menu.Item>
            <Menu.Item>   <a href="/news">News</a></Menu.Item>
            <Menu.Item>   <a href="/about">About Us</a></Menu.Item>
            <Menu.Item>   <a href="/contact">Contact Us</a></Menu.Item>
            {

              !localStorage.getItem('user') ?
                <Menu.Item >
                  <LoginModal textBtn={'Log-in'} styleBtn={{ 'color': '#0577cb', 'background': 'white', 'min-width': '150px' }} />
                </Menu.Item>
                :
                <Menu.Item>
                  <Dropdown className={style.username} text={this.props.user.userData != undefined ? this.props.user.userData.name : ''} floating button>
                    <Dropdown.Menu>
                      {/* <Dropdown.Item>Important</Dropdown.Item> */}
                      <Dropdown.Item><a href="/user">Change Password</a></Dropdown.Item>
                      <Dropdown.Item><a href="/user/booking">Booking</a></Dropdown.Item>
                      <Dropdown.Item><a href="/logout">Logout</a></Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
            }
          </Responsive>

          <Responsive as={Menu.Menu} position='right' maxWidth={768}>
            <HamburgerMenu userData={this.props.user.userData} />
          </Responsive>
        </Container>
      </Menu >
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.auth
  };
}

export default connect(mapStateToProps, {
  get_user
})(Header);
