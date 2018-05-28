import { h, Component } from 'preact';
import { BrowserRoute, Link } from 'react-router-dom';
import { history } from '../../../helpers';
import LoginModal from '../../fragment/loginModal';
import { Container, Menu, Button, Image } from 'semantic-ui-react';

export default class Header extends Component {
  render() {
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
            <Menu.Item>   <Link to="/search?type=2">Penyewaan</Link></Menu.Item>
            <Menu.Item>   <Link to="/search?type=1">Jual Beli</Link></Menu.Item>
            <Menu.Item>   <Link to="/news">News</Link></Menu.Item>
            <Menu.Item>   <Link to="/about">About Us</Link></Menu.Item>
            <Menu.Item>   <Link to="/contact">Contact Us</Link></Menu.Item>
            {
              !localStorage.getItem('user') ?
                <Menu.Item >
                  <LoginModal textBtn={'Log-in'} styleBtn={{ 'color': '#0577cb', 'background': 'white', 'min-width': '150px' }} />
                </Menu.Item> : null
            }
          </Menu.Menu>
        </Container>
      </Menu >
    );
  }
}
