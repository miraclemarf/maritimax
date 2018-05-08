import { h, Component } from 'preact';
import { connect } from 'react-redux';
import { fetch_morenews } from '../../actions';
import _ from 'lodash';
import style from './style';
import { Label, Segment, Container, Grid, Header, Divider, Image, Button } from 'semantic-ui-react';
import CardNews from '../../components/card/news';

class News extends Component {
    componentDidMount() {
        this.props.fetch_morenews();
    }
    renderNews() {
        return _.map(this.props.news, news => {
            return (
                <Grid.Column>
                    <CardNews {...news} />
                </Grid.Column>
            );
        });
    }
    render() {
        return (
            <div class={style.news}>
                <Segment basic>{ /*LIST CARD NEWS*/}
                    <Container>
                        <div>
                            <Header as='h1' content='All News' />
                            <p>
                                Whether it’s for business or leisure, you can always save a lot more with maritimax. <br />
                                See all our ongoing promotions here:
                            </p>
                            <Divider clearing hidden />
                        </div>
                        <Grid columns={3} stackable>
                            {this.renderNews()}
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
        news: state.news
    };
}

export default connect(mapStateToProps, {
    fetch_morenews
})(News);
