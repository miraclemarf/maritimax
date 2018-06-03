import { h, Component } from 'preact';
import { BrowserRoute, Link } from 'react-router-dom';
import { history } from '../../../helpers';
import LoginModal from '../../fragment/loginModal';
import { Container, Menu, Button, Image, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { get_user } from '../../../actions'
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
    console.log(this.props.user)
    return (
      <Menu style={{
        'background-color': '#0577cb'
      }} fixed='top' inverted secondary>
        <Container>
          <Menu.Item as='a' header>
            <Image src='/assets/images/logo2.svg' as='a' size='small' to='/' />
          </Menu.Item>
          <Menu.Menu position='right'>
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
                  <Dropdown className={style.username} text={this.props.user.userData != undefined ? this.props.user.userData.name : ''} floating button>
                    <Dropdown.Menu>
                      {/* <Dropdown.Item>Important</Dropdown.Item> */}
                      {/* <Dropdown.Item><a href="/user/booking">Booking</a></Dropdown.Item> */}
                      <Dropdown.Item><a href="/logout">Logout</a></Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
            }
          </Menu.Menu>
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
