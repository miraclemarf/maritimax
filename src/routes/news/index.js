import { h, Component } from 'preact';
import { connect } from 'react-redux';
import { fetch_allnews } from '../../actions';
import _ from 'lodash';
import style from './style';
import { Label, Segment, Container, Grid, Header, Divider, Image, Button } from 'semantic-ui-react';
import CardNews from '../../components/card/news';

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'news': [],
            'hasMore': false,
            'page': 1
        };

        this.renderMoreNews = this.renderMoreNews.bind(this);
        this.ButtonMore = this.ButtonMore.bind(this);
    };
    componentDidMount() {
        this.props.fetch_allnews(this.state.page);
    }
    mapNews() {
        const newsObj = _.mapKeys(this.props.news.data, 'id');

        _.map(newsObj, news => {
            this.state.news.push(news)
        })
        return this.state.news;
    }
    renderNews() {
        const mapNews = this.mapNews();
        return _.map(mapNews, news => {
            return (
                <Grid.Column>
                    <CardNews {...news} />
                </Grid.Column>
            );
        });
    }
    ButtonMore() {
        if (this.props.news.meta.to != this.props.news.meta.total) {
            return (
                <div style={{ 'text-align': 'center' }}>
                    <Divider hidden />
                    <Button style={{ 'background': 'transparent', 'font-size': '.9em', 'border': '2px solid #0577cb', 'color': '#0577cb', 'min-width': '150px' }} onClick={this.renderMoreNews}>Load More</Button>
                </div>
            );
        }
    }
    renderMoreNews(e) {
        e.preventDefault();
        const page = ++this.state.page;
        this.props.fetch_allnews(page);
    }
    render() {
        let hasMore = '';
        if (_.isEmpty(this.props.news)) {
            return <div>Loading...</div>
        }
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
                        {this.ButtonMore()}
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
    fetch_allnews
})(News);
