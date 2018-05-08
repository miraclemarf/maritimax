import { Container, Divider, Header, Image } from 'semantic-ui-react'
const Promo = (props) => (
  <Container>
      <Header as='h1' content='Why Maritimax' inverted />
      <Divider hidden />
      <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Warnem%C3%BCnde_LPG-Tanker_%2801%29_2006-09-21.JPG/1200px-Warnem%C3%BCnde_LPG-Tanker_%2801%29_2006-09-21.JPG' fluid />
      <Divider hidden />
      <p style={{
    'font-size': '1.2em',
    'color': '#fff'
  }}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, vero nisi velit mollitia nostrum. Sunt error facilis aspernatur sit reiciendis numquam, ipsam. Maiores saepe consectetur facere quod fugiat officia sint. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, vero nisi velit mollitia nostrum. Sunt error facilis aspernatur sit reiciendis numquam, ipsam. Maiores saepe consectetur facere quod fugiat officia sint.
      </p>
  </Container>
);
export default Promo;