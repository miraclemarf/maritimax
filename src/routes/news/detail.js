import { h, Component } from 'preact';
import style from './style';
import { connect } from 'react-redux';
import { get_news } from '../../actions';
import { Segment, Container, Grid, Header, Divider, Image, Button } from 'semantic-ui-react';
import Promo from '../../components/fragment/promo';

class NewsDetail extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.get_news(id);
    }
    render() {
        return (
            <div style={{ 'padding-top': '5.5em', 'background-color': '#fff', 'border-bottom': '1px solid #DBDBDB' }}>
                <Segment style={{ 'padding': '0' }} basic>{ /*SINGLE PROMO*/}
                    <Image fluid src={this.props.news.img_cover} />
                    <Container>
                        <Divider hidden />
                        <Header style={{ 'color': '#343434', 'margin-bottom': '0' }} textAlign="left" as="h1" content={this.props.news.title} />
                        <span style={{ 'font-weight': '700', 'font-size': '1.3em', 'color': '#0577CB' }}>{this.props.news.category_name}</span>

                        <p style={{ 'font-size': '1em', 'color': '#535353', 'margin-top': '15px' }}>
                            {this.props.news.body}
                        </p>
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
        news: state.news
    };
}

export default connect(mapStateToProps, {
    get_news
})(NewsDetail);
