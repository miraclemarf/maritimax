import { h, Component } from "preact";
import { Image, Divider } from 'semantic-ui-react';
import Slider from "react-slick";

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

    render() {
        return (
            <div className={'product-main'}>
                <Slider
                    arrows={false}
                    fade={true}
                    asNavFor={this.state.nav2}
                    swipeToSlide={false}
                    ref={slider => (this.slider1 = slider)}
                >
                    <div>
                        <div className={'sixteen-nine bg-img'} style={{ 'background-image': 'url(' + encodeURI(this.props.image_cargo[0].img_url) + ')' }}>
                        </div>
                    </div>
                    <div>
                        <div className={'sixteen-nine bg-img'} style={{ 'background-image': 'url(' + encodeURI(this.props.image_cargo[1].img_url) + ')' }}>
                        </div>
                    </div>
                    <div>
                        <div className={'sixteen-nine bg-img'} style={{ 'background-image': 'url(' + encodeURI(this.props.image_cargo[2].img_url) + ')' }}>
                        </div>
                    </div>
                    <div>
                        <div className={'sixteen-nine bg-img'} style={{ 'background-image': 'url(' + encodeURI(this.props.image_cargo[3].img_url) + ')' }}>
                        </div>
                    </div>
                </Slider>
                <Slider className={'thumb-slide'}
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={4}
                    variableWidth={true}
                    swipeToSlide={false}
                    focusOnSelect={true}
                >
                    <div>
                        <div className={'sixteen-nine bg-img'} style={{ 'background-image': 'url(' + encodeURI(this.props.image_cargo[0].img_url) + ')' }}>
                        </div>
                    </div>
                    <div>
                        <div className={'sixteen-nine bg-img'} style={{ 'background-image': 'url(' + encodeURI(this.props.image_cargo[1].img_url) + ')' }}>
                        </div>
                    </div>
                    <div>
                        <div className={'sixteen-nine bg-img'} style={{ 'background-image': 'url(' + encodeURI(this.props.image_cargo[2].img_url) + ')' }}>
                        </div>
                    </div>
                    <div>
                        <div className={'sixteen-nine bg-img'} style={{ 'background-image': 'url(' + encodeURI(this.props.image_cargo[3].img_url) + ')' }}>
                        </div>
                    </div>
                </Slider>
                <Divider hidden />
                <div>
                    <h3>General Data (Description)</h3>
                    <Divider style={{ 'margin': '0' }} hidden />
                    <p style={{ 'font-size': '1.1em' }}>
                        {this.props.desc}
                    </p>
                </div>
            </div>
        );
    }
}