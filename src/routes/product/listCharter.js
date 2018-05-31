import { h, Component } from "preact";

import { connect } from 'react-redux';
import { search_products } from '../../actions';
import style from './style';
import _ from 'lodash';
import qs from 'query-string';
import { Segment, Container, Grid, Header, Divider, Image, Button } from 'semantic-ui-react';
import FilterWithCheckBox from '../../components/filter/withCheckBox';
import Promo from '../../components/fragment/promo';
import BreadCrumb from '../../components/fragment/breadCrumb';
import CardProductHorizontal from '../../components/card/productHorizontal';

class ListCharter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'type': '',
            'param': '',
            'products': [],
            'hasMore': false,
            'page': 1
        };

        this.renderMoreProducts = this.renderMoreProducts.bind(this);
        this.ButtonMore = this.ButtonMore.bind(this);
    };
    componentDidMount() {

        const param = {}
        param.booking_type = 'charter';
        this.setState({ 'param': param });
        this.props.search_products(param, this.state.page);
    }

    mapProducts() {
        const productsObj = _.mapKeys(this.props.searchProducts.data, 'id');

        _.map(productsObj, product => {
            this.state.products.push(product)
        })
        return this.state.products;
    }
    renderProducts() {
        const productsMap = this.mapProducts();

        return _.map(productsMap, products => {
            return (
                <Grid.Column>
                    <CardProductHorizontal {...products} />
                </Grid.Column>
            );
        });

    }
    ButtonMore() {
        if (this.props.searchProducts.meta.to != this.props.searchProducts.meta.total) {
            return (
                <div style={{ 'text-align': 'center' }}>
                    <Divider hidden />
                    <Button style={{ 'background': 'transparent', 'font-size': '.9em', 'border': '2px solid #0577cb', 'color': '#0577cb', 'min-width': '150px' }} onClick={this.renderMoreProducts}>Load More</Button>
                </div>
            );
        }
    }
    renderMoreProducts(e) {
        e.preventDefault();
        const page = ++this.state.page;
        this.props.search_products(this.state.param, page);
    }
    render() {


        let hasMore = '';
        if (_.isEmpty(this.props.searchProducts)) {
            return <div>Loading...</div>
        }
        //console.log(this.props.searchProducts);
        return (
            <div class={style.search}>
                <BreadCrumb />
                <Segment basic textAlign='center'>
                    <Container>
                        <div class={style.filter}>
                            <FilterWithCheckBox passData={this.state.type} />
                        </div>
                    </Container>
                </Segment>
                <Segment basic>
                    <Container>
                        <div style={{ 'font-size': '1.5em', 'color': '#767676' }}>
                            <strong>{this.props.searchProducts.meta.total}</strong><span> ditemukan berdasarkan filter</span>
                            <Divider hidden />
                        </div>
                        <Grid columns={1} stackable>
                            {this.renderProducts()}
                        </Grid>
                        {this.ButtonMore()}
                    </Container>
                </Segment>
                <Segment className={style.bgblue} basic textAlign='center'>{ /*SINGLE PROMO*/}
                    <Promo />
                </Segment>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchProducts: state.products
    };
}

export default connect(mapStateToProps, {
    search_products
})(ListCharter);
