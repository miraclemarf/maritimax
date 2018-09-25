import { h, Component } from "preact";
import { Divider } from 'semantic-ui-react';
import Markup from 'preact-markup';
import Slider from "react-slick";
import _ from 'lodash';

export default class ProductMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    renderImg(){
        const imgMap = this.props.image_cargo;

        return _.map(imgMap, img => {
            return (
                <div>
                        <div className={'sixteen-nine bg-img'} style={{ 'background-image': 'url(' + encodeURI(img.img_url) + ')' }}>
                        </div>
                    </div>
            );
        });
    }
    render() {
        if (_.isEmpty(this.props.image_cargo)) {
            return <div class="sixteen-nine bg-img" style="background-image: url(http://www.sangathipl.com/wp-content/uploads/2016/07/no-image-avaliable.jpg);"></div>
        }
        return (
            <div className={'product-main'}>
                <Slider
                    arrows={false}
                    fade={true}
                    asNavFor={this.state.nav2}
                    swipeToSlide={false}
                    ref={slider => (this.slider1 = slider)}
                >
                    {this.renderImg()}
                </Slider>
                <Slider className={'thumb-slide'}
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={this.props.image_cargo.length}
                    variableWidth={true}
                    swipeToSlide={false}
                    focusOnSelect={true}
                >
                     {this.renderImg()}
                </Slider>
                <Divider hidden />
                <div>
                    <h3>General Data (Description)</h3>
                    <Divider style={{ 'margin': '0' }} hidden />
                    <p style={{ 'font-size': '1.1em' }}>
                        <Markup markup={this.props.desc} type='html' />
                    </p>
                </div>
            </div>
        );
    }
}