import { h, Component } from 'preact';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetch_products, fetch_news } from '../../actions';
import _ from 'lodash';
import style from './style';
import { Segment, Container, Grid, Header, Divider, Image, Button } from 'semantic-ui-react';
import FilterWithIcon from '../../components/filter/withIcon';
import Promo from '../../components/fragment/promo';
import CardNews from '../../components/card/news';
import CardProduct from '../../components/card/product';

class Home extends Component {
    constructor(props) {
        super(props);
    };
    componentDidMount() {
        this.props.fetch_products();
        this.props.fetch_news();
    }
    renderNews() {
        return _.map(this.props.news.data, news => {
            return (
                <Grid.Column>
                    <CardNews {...news} />
                </Grid.Column>
            );
        });
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
        console.log(this.state)
        return (
            <div class={style.home}>
                <Segment basic textAlign='center' className={style.bgsegment}>
                    <Container>
                        <Header inverted as='h1' content='Klik Ikon di bawah ini untuk Membeli atau Menyewa Vessel' />
                        <FilterWithIcon />
                    </Container>
                </Segment>
                <Divider hidden />
                <Segment basic>{ /*LIST CARD NEWS*/}
                    <Container>
                        <div>
                            <Header as='h1' style={{ 'color': '#484848' }} floated='left' content='Maritimax News' />
                            <Button as='a' href='/news' style={{ 'border': 'none', 'background': 'transparent', 'color': '#0577CB', 'padding-right': '0' }} floated='right'>SEE MORE</Button>
                            <Divider clearing hidden />
                        </div>
                        <Grid columns={3} stackable>
                            {this.renderNews()}
                        </Grid>
                    </Container>
                </Segment>
                <Divider hidden />
                <Segment className={style.bgblue} basic textAlign='center'>{ /*SINGLE PROMO*/}
                    <Promo />
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
                <Divider />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products,
        news: state.news
    };
}

export default connect(mapStateToProps, {
    fetch_products,
    fetch_news
})(Home);
