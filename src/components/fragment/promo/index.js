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
      Maritimax adalah sebuah online media store partner bagi stakeholder perkapalan, meningkatkan awareness, membantu user mengevaluasi value proportion yang ditawarkan, dan mengedukasi cara-cara sewa dan jual-beli kapal. Maritimax menghubungkan pemilik dan penyewa atau penjual dan pembeli secara langsung tanpa broker, sekaligus menjadi media penghubung jangka panjang antar komunitas pemilik, penyewa, penjual, dan calon pembeli kapal.
      </p>
  </Container>
);
export default Promo;