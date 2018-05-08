import { h, Component } from 'preact';
import style from './style';
import { Segment, Container, Grid, Header, Divider, Image, Button } from 'semantic-ui-react';
import Promo from '../../components/fragment/promo';

export default class Product extends Component {
    render() {
        return (
            <div style={{ 'padding-top': '5.5em', 'background-color': '#F4F4F4', 'border-bottom': '1px solid #DBDBDB' }}>
                <Segment style={{ 'padding': '0' }} basic>{ /*SINGLE PROMO*/}
                    <Container style={{ 'background-color': '#fff', 'margin': '4em 0', 'padding': '2em', 'box-shadow': '0px 3px 6px 0px rgba(0,0,0,0.16)', 'border-radius': '8px' }}>
                        <Grid columns={2} stackable>
                            <Grid.Column width={11}>
                                <Image fluid src="https://loremflickr.com/723/405/tanker,vessel?random=212" />
                                <Divider hidden />
                                <div style={{ 'color': '#535353', 'margin-top': '15px' }}>
                                    <p style={{ 'font-size': '1.1em' }}><b>General Data (Description)</b><br />Name of Vessel: Type : Deck <br />Cargo Barge Flag : Indonesian <br />Classification: Bki <br />Port Of Registry: Batam <br />Material : Steel <br />Vessel’s Mark : <br />GRT/NRT: <br />Length/ Over All : 270 Feets <br />Breadth : 270 Feets <br />Breadth : 80 Feets <br />Depth : 16 Feets </p><p><b style={{ 'font-size': '1.1em' }}>Ketentuan Harga Jasa Cargo Udara, Cargo Laut dan Cargo Darat. </b><br />Harga sudah termasuk bahan bakar, supir dan biaya jalan tol. <br />Harga sewaktu-waktu dapat berubah tanpa ada pemberitahuan terlebih dahulu. <br />Harga yang muncul berdasarkan tawaran harga cargo darat, udara, dan laut termurah dari 400 vendor. <br />Jika harga untuk tarif rute cargo yang Anda inginkan tidak muncul, silahkan minta penawaran harga menggunakan fitur yang ada di atas</p>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <h4 style={{ 'color': '#0577CB', 'margin-bottom': '0' }}>{'VC281PO PASSANGER'}</h4>
                                <div style={{ 'margin-bottom': '5px', 'color': '#484848' }}>{'Model Vessel'}</div>
                                <span style={{ 'color': '#0577CB', 'font-size': '88%', 'font-style': 'italic' }}>{'Tanjung priuk, Jakarta Selatan'}</span>
                                <hr style={{ 'border-color': '#DBDBDB', 'background': 'transparent' }} />
                                <div>
                                    <div className={style.left}>
                                        <h5>{'Model Vessel'}</h5>
                                    </div>
                                    <div className={style.right}>
                                        <h5>{': Towing'}</h5>
                                    </div>
                                    <Divider hidden clearing />
                                </div>
                                <div>
                                    <div className={style.left}>
                                        <h5>{'Jenis Charter'}</h5>
                                    </div>
                                    <div className={style.right}>
                                        <h5>{': Freight'}</h5>
                                    </div>
                                    <Divider hidden clearing />
                                </div>
                                <div>
                                    <div className={style.left}>
                                        <h5>{'Dimensi'}</h5>
                                    </div>
                                    <div className={style.right}>
                                        <h5>{': 320 cm X 100cm'}</h5>
                                    </div>
                                    <Divider hidden clearing />
                                </div>
                                <div>
                                    <div className={style.left}>
                                        <h5>{'Lebar'}</h5>
                                    </div>
                                    <div className={style.right}>
                                        <h5>{': 235 cm'}</h5>
                                    </div>
                                    <Divider hidden clearing />
                                </div>
                                <div>
                                    <div className={style.left}>
                                        <h5>{'Year Built'}</h5>
                                    </div>
                                    <div className={style.right}>
                                        <h5>{': 2015'}</h5>
                                    </div>
                                    <Divider hidden clearing />
                                </div>
                                <div>
                                    <div className={style.left}>
                                        <h5>{'Flag'}</h5>
                                    </div>
                                    <div className={style.right}>
                                        <h5>{': Indonesia'}</h5>
                                    </div>
                                    <Divider hidden clearing />
                                </div>
                                <div>
                                    <div className={style.left}>
                                        <h5>{'Area of Service'}</h5>
                                    </div>
                                    <div className={style.right}>
                                        <h5>{': Ocean Going'}</h5>
                                    </div>
                                    <Divider hidden clearing />
                                </div>
                                <div>
                                    <div className={style.left}>
                                        <h5>{'Kapasitas Muatan'}</h5>
                                    </div>
                                    <div className={style.right}>
                                        <h5>{': 20.000 kg'}</h5>
                                    </div>
                                    <Divider hidden clearing />
                                </div>
                                <div>
                                    <div>
                                        <h2 style={{ 'color': '#0577CB' }}>{"Rp. "}{'25.000.000'}{"/Month"}</h2>
                                    </div>
                                    <div style={{ 'font-size': '88%', 'margin-bottom': '10px', 'color': '#535353' }}>
                                        {"Available time for charter from 2 Jan - 12 Feb 2018"}
                                    </div>
                                    <div style={{ 'color': '#484848', 'margin-bottom': '10px' }}>
                                        <strong style={{ 'color': '#0577CB' }}>{"10.000 Kg"}</strong>{" spaces left, from "}<strong>{"20.000 Kg"}</strong>
                                    </div>
                                    <Button fluid style={{ 'background-color': '#0577CB', 'color': '#fff', 'margin-bottom': '8px', 'max-width': '80%' }} >NEGOTIATE</Button>
                                    <div style={{ 'font-size': '88%', 'margin-bottom': '10px', 'color': '#535353' }}>
                                        {"Call for Price if price hidden"}
                                    </div>
                                </div>
                            </Grid.Column>
                        </Grid>

                        <Divider hidden />
                    </Container>
                </Segment>
                <Segment className={style.bgblue} basic textAlign='center'>{ /*SINGLE PROMO*/}
                    <Promo />
                    <Divider hidden />
                </Segment>
            </div>
        );
    }
}