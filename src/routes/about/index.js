import { h, Component } from 'preact';
import { connect } from 'react-redux';
import { fetch_products } from '../../actions';
import _ from 'lodash';
import style from './style';
import 'react-day-picker/lib/style.css';
import { Segment, Container, Grid, Header, Divider, Image, Button } from 'semantic-ui-react';
import CardProduct from '../../components/card/product';

class About extends Component {
    componentDidMount() {
        this.props.fetch_products();
    }
    renderProducts() {
        return _.map(this.props.products, products => {
            return (
                <Grid.Column>
                    <CardProduct {...products} />
                </Grid.Column>
            );
        });
    }
    render() {
        return (
            <div style={{ 'padding-top': '5em', 'background-color': '#F4F4F4', 'border-bottom': '1px solid #DBDBDB' }}>
                <Segment basic textAlign='center'>{ /*SINGLE PROMO*/}
                    <Container>
                        <Divider hidden />
                        <Header as="h1" content="About us" />
                        <Divider hidden />
                        <p style={{ 'font-size': '1em', 'text-align': 'left' }}>
                            Maritimax adalah sebuah online media store partner bagi stakeholder perkapalan, meningkatkan awareness, membantu user mengevaluasi value proportion yang ditawarkan, dan mengedukasi cara-cara sewa dan jual-beli kapal. Maritimax menghubungkan pemilik dan penyewa atau penjual dan pembeli secara langsung tanpa broker, sekaligus menjadi media penghubung jangka panjang antar komunitas pemilik, penyewa, penjual, dan calon pembeli kapal.
                        </p>
                        <Header as="h1" content="Why us" />
                        <Divider hidden />
                        <p style={{ 'font-size': '1em', 'text-align': 'left' }}>
                            <p class="MsoNoSpacing" style="text-align:justify">1.<span style="white-space: pre;">	</span>AMAN – Kami memverifikasi identitas dan alamat semua pihak yang beriklan di situs ini. Kami juga menerapkan prosedur untuk memastikan mereka memberikan layanan yang baik. Dengan demikian, transaksi Anda dipastikan aman.</p>

                            <p class="MsoNoSpacing" style="text-align:justify">2.<span style="white-space:pre">	</span>UPDATE – Data-data kapal dan muatan akan terus diperbarui oleh tim kami. Kami menghapus iklan apabila telah terjadi transaksi.</p>

                            <p class="MsoNoSpacing" style="text-align:justify">3.<span style="white-space:pre">	</span>EFISIEN – Kami menginformasikan harga pasar yang tepat dan ideal dalam sewa dan jual-beli kapal, sekaligus mengurangi peranan broker dalam sistem konvensional sewa dan jual-beli kapal.</p>

                            <p class="MsoNoSpacing" style="text-align:justify">4.<span style="white-space: pre;">	</span>CEPAT DAN MUDAH – Kami menyediakan informasi pemilik dan penyewa atau penjual dan pembeli secara langsung melalui online. Transaksi lebih mudah dalam genggaman tangan Anda.</p>
                        </p>
                    </Container>
                </Segment>
                <Segment basic>{ /*LIST PRODUCT BY LOCATION*/}
                    <Container>
                        <div>

                            <Header as='h1' style={{ 'color': '#484848' }} floated='left' content='Cargo in Your City' />
                            <Button as='a' href='/search' style={{ 'border': 'none', 'background': 'transparent', 'color': '#0577CB', 'padding-right': '0' }} floated='right'>SEE MORE</Button>
                            <Divider clearing hidden />
                        </div>
                        <Grid columns={3} stackable>
                            {this.renderProducts()}
                        </Grid>
                    </Container>
                </Segment>
                <Divider hidden />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    };
}

export default connect(mapStateToProps, {
    fetch_products
})(About);
