import { h, Component } from "preact";

import { connect } from 'react-redux';
import { search_products } from '../../actions';
import style from './style';
import _ from 'lodash';
import { Segment, Container, Grid, Header, Divider, Image, Button } from 'semantic-ui-react';
import FilterWithCheckBox from '../../components/filter/withCheckBox';
import Promo from '../../components/fragment/promo';
import BreadCrumb from '../../components/fragment/breadCrumb';
import CardProductHorizontal from '../../components/card/productHorizontal';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 'type': '' };
    };
    componentDidMount() {
        //console.log(this.props);
        //this.setState({ 'type': this.props.matches.type });
        this.props.search_products();
    }
    renderProducts() {
        return _.map(this.props.products, products => {
            return (
                <Grid.Column>
                    <CardProductHorizontal {...products} />
                </Grid.Column>
            );
        });
    }
    render() {
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
                            <strong>128 vessel</strong><span> ditemukan berdasarkan filter</span>
                            <Divider hidden />
                        </div>
                        <Grid columns={1} stackable>
                            {this.renderProducts()}
                        </Grid>
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
        products: state.products
    };
}

export default connect(mapStateToProps, {
    search_products
})(Search);
