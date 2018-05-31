import { h, Component } from 'preact';
import { connect } from 'react-redux';
import { fetch_products } from '../../actions';
import _ from 'lodash';
import style from './style';
import DayPicker from 'react-day-picker';
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
                        <Header as="h1" content="Simply booking with us" />
                        <Divider hidden />
                        <Image fluid src="https://loremflickr.com/1060/423/business?random=123" />
                        <Divider hidden />
                        <p style={{ 'font-size': '1em', 'text-align': 'left' }}>
                            Nulla nec ligula porta, elementum nibh eget, pretium nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum sem turpis, ut pellentesque velit vehicula in. In hac habitasse platea dictumst. Donec varius nunc sit amet ullamcorper iaculis. Sed euismod in dui ac iaculis. Suspendisse ultricies quis nunc a sodales. Donec auctor id urna eget auctor. Integer placerat elementum diam, non mattis justo viverra ac.
                        </p>
                        <Divider hidden />
                        <Image fluid src="https://loremflickr.com/1060/423/tanker?random=424" />
                        <Divider hidden />
                        <p style={{ 'font-size': '1em', 'text-align': 'left' }}>
                            Nulla nec ligula porta, elementum nibh eget, pretium nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum sem turpis, ut pellentesque velit vehicula in. In hac habitasse platea dictumst. Donec varius nunc sit amet ullamcorper iaculis. Sed euismod in dui ac iaculis. Suspendisse ultricies quis nunc a sodales. Donec auctor id urna eget auctor. Integer placerat elementum diam, non mattis justo viverra ac.
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
                <DayPicker />

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
