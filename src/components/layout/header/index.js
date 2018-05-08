import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import { Container, Menu, Button, Image } from 'semantic-ui-react';

export default class Header extends Component {
  render() {
    return (
      <Menu style={{
        'background-color': '#0577cb'
      }} fixed='top' inverted secondary>
        <Container>
          <Menu.Item as='a' header>
            <Image src='/assets/images/logo2.svg' as='a' size='small' href='/' />
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item> <Link activeClassName={style.active} href="/">Home</Link></Menu.Item>
            <Menu.Item>   <Link activeClassName={style.active} href="/search">Penyewaan</Link></Menu.Item>
            <Menu.Item>   <Link activeClassName={style.active} href="/search">Jual Beli</Link></Menu.Item>
            <Menu.Item>   <Link activeClassName={style.active} href="/news">News</Link></Menu.Item>
            <Menu.Item>   <Link activeClassName={style.active} href="/about">About Us</Link></Menu.Item>
            <Menu.Item>   <Link activeClassName={style.active} href="/">Contact Us</Link></Menu.Item>
            <Menu.Item>
              <Button className={style.btn}>Log-in</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}
