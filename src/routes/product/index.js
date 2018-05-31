import { h, Component } from 'preact';
import { connect } from 'react-redux';
import { get_product } from '../../actions';
import style from './style';
import { Segment, Container, Grid, Header, Divider, Image, Button } from 'semantic-ui-react';
import ProductMain from '../../components/productMain';
import Promo from '../../components/fragment/promo';
import LoginModal from '../../components/fragment/loginModal';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };
    show = size => () => this.setState({ size, open: true })

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.get_product(id);
    }
    renderMainProduct() {
        if (!_.isEmpty(this.props.auth)) {
            if (!_.isEmpty(this.props.product)) {
                return (
                    <ProductMain image_cargo={this.props.product.img_cargos} desc={this.props.product.description} />
                )
            }
        }
        else {
            return (
                <div style={{ 'background-color': '#fff', 'padding': '2em', 'box-shadow': '0px 3px 6px 0px rgba(0,0,0,0.16)', 'border-radius': '8px' }}>
                    <div style={{ 'color': '#535353', 'margin-top': '0' }}>
                        <p style={{ 'font-size': '1.1em', 'margin-bottom': '0' }}>
                            <b>Log in or Register</b> to Negotiate with us
                                    </p>
                        <p style={{ 'font-size': '.9em' }}>
                            Nulla nec ligula porta, elementum nibh eget, pretium nisl
                                    </p>
                    </div>
                    <Divider hidden />
                    <LoginModal textBtn={'Log in or Register'} styleBtn={{ 'background-color': '#0577CB', 'color': '#fff', 'margin-bottom': '8px' }} />
                </div>
            )
        }
    }


    render() {
        return (

            <div style={{ 'padding-top': '5.5em', 'background-color': '#F4F4F4', 'border-bottom': '1px solid #DBDBDB' }}>

                <Segment style={{ 'padding': '0' }} basic>{ /*SINGLE PROMO*/}
                    <Container style={{ 'margin': '4em 0' }}>
                        <Grid columns={2} stackable>
                            <Grid.Column width={11}>
                                {this.renderMainProduct()}

                            </Grid.Column>
                            <Grid.Column width={5}>
                                <div style={{ 'background-color': '#fff', 'padding': '2em', 'box-shadow': '0px 3px 6px 0px rgba(0,0,0,0.16)', 'border-radius': '8px' }}>
                                    <h4 style={{ 'color': '#0577CB', 'margin-bottom': '0' }}>{this.props.product.name}</h4>
                                    <div style={{ 'margin-bottom': '5px', 'color': '#484848' }}>{this.props.product.cargo_model}</div>
                                    <span style={{ 'color': '#0577CB', 'font-size': '88%', 'font-style': 'italic' }}>{this.props.product.location}, {this.props.product.city}</span>
                                    <hr style={{ 'border-color': '#DBDBDB', 'background': 'transparent' }} />
                                    <div>
                                        <div className={style.left}>
                                            <h5>{'Model Vessel'}</h5>
                                        </div>
                                        <div className={style.right}>
                                            <h5>{': ' + this.props.product.cargo_model}</h5>
                                        </div>
                                        <Divider hidden clearing />
                                    </div>
                                    <div>
                                        <div className={style.left}>
                                            <h5>{'Jenis Charter'}</h5>
                                        </div>
                                        <div className={style.right}>
                                            <h5>{': ' + this.props.product.charter_type}</h5>
                                        </div>
                                        <Divider hidden clearing />
                                    </div>
                                    <div>
                                        <div className={style.left}>
                                            <h5>{'Dimensi'}</h5>
                                        </div>
                                        <div className={style.right}>
                                            <h5>{': ' + this.props.product.dimension + ' cm'}</h5>
                                        </div>
                                        <Divider hidden clearing />
                                    </div>
                                    <div>
                                        <div className={style.left}>
                                            <h5>{'Lebar'}</h5>
                                        </div>
                                        <div className={style.right}>
                                            <h5>{': ' + this.props.product.width + ' cm'}</h5>
                                        </div>
                                        <Divider hidden clearing />
                                    </div>
                                    <div>
                                        <div className={style.left}>
                                            <h5>{'Year Built'}</h5>
                                        </div>
                                        <div className={style.right}>
                                            <h5>{': ' + this.props.product.year_build}</h5>
                                        </div>
                                        <Divider hidden clearing />
                                    </div>
                                    <div>
                                        <div className={style.left}>
                                            <h5>{'Flag'}</h5>
                                        </div>
                                        <div className={style.right}>
                                            <h5>{': ' + this.props.product.flag}</h5>
                                        </div>
                                        <Divider hidden clearing />
                                    </div>
                                    <div>
                                        <div className={style.left}>
                                            <h5>{'Area of Service'}</h5>
                                        </div>
                                        <div className={style.right}>
                                            <h5>{': ' + this.props.product.area_of_service}</h5>
                                        </div>
                                        <Divider hidden clearing />
                                    </div>
                                    <div>
                                        <div className={style.left}>
                                            <h5>{'Kapasitas Muatan'}</h5>
                                        </div>
                                        <div className={style.right}>
                                            <h5>{': ' + this.props.product.load_capacity + ' Kg'}</h5>
                                        </div>
                                        <Divider hidden clearing />
                                    </div>
                                    <div>
                                        <div>
                                            <h2 style={{ 'color': '#0577CB' }}>{"Rp. "}{this.props.product.price}{"/Month"}</h2>
                                        </div>
                                        <div style={{ 'font-size': '88%', 'margin-bottom': '10px', 'color': '#535353' }}>
                                            {"Available time for charter from " + this.props.product.available_start + " - " + this.props.product.available_end}
                                        </div>
                                        <div style={{ 'color': '#484848', 'margin-bottom': '10px' }}>
                                            <strong style={{ 'color': '#0577CB' }}>{"10.000 Kg"}</strong>{" spaces left, from "}<strong>{"20.000 Kg"}</strong>
                                        </div>
                                        <Button fluid style={{ 'background-color': '#DBDBDB', 'color': '#fff', 'margin-bottom': '8px', 'max-width': '80%' }} >NEGOTIATE</Button>
                                        {/* <div style={{ 'font-size': '88%', 'margin-bottom': '10px', 'color': '#535353' }}>
                                            {"Call for Price if price hidden"}
                                        </div> */}
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
function mapStateToProps(state) {
    return {
        auth: state.auth,
        product: state.products
    };
}

export default connect(mapStateToProps, {
    get_product
})(Product);
