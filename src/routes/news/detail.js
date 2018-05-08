import { h, Component } from 'preact';
import style from './style';
import { Segment, Container, Grid, Header, Divider, Image, Button } from 'semantic-ui-react';
import Promo from '../../components/fragment/promo';

export default class NewsDetail extends Component {
    render() {
        return (
            <div style={{ 'padding-top': '5.5em', 'background-color': '#fff', 'border-bottom': '1px solid #DBDBDB' }}>
                <Segment style={{ 'padding': '0' }} basic>{ /*SINGLE PROMO*/}
                    <Image fluid src="https://loremflickr.com/1060/423/business?random=212" />
                    <Container>
                        <Divider hidden />
                        <Header style={{ 'color': '#343434', 'margin-bottom': '0' }} textAlign="left" as="h1" content="Cargo with currency" />
                        <span style={{ 'font-weight': '700', 'font-size': '1.3em', 'color': '#0577CB' }}>Lifestyle</span>

                        <p style={{ 'font-size': '1em', 'color': '#535353', 'margin-top': '15px' }}>
                            Nulla nec ligula porta, elementum nibh eget, pretium nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum sem turpis, ut pellentesque velit vehicula in. In hac habitasse platea dictumst. Donec varius nunc sit amet ullamcorper iaculis. Sed euismod in dui ac iaculis. Suspendisse ultricies quis nunc a sodales. Donec auctor id urna eget auctor. Integer placerat elementum diam, non mattis justo viverra ac. Nulla nec ligula porta, elementum nibh eget, pretium nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum sem turpis, ut pellentesque velit vehicula in. In hac habitasse platea dictumst. Donec varius nunc sit amet ullamcorper iaculis. Sed euismod in dui ac iaculis. Suspendisse ultricies quis nunc a sodales. Donec auctor id urna eget auctor. Integer placerat elementum diam, non mattis justo viverra ac.Nulla nec ligula porta, elementum nibh eget, pretium nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum sem turpis, ut pellentesque velit vehicula in. In hac habitasse platea dictumst. Donec varius nunc sit amet ullamcorper iaculis. Sed euismod in dui ac iaculis. Suspendisse ultricies quis nunc a sodales. Donec auctor id urna eget auctor. Integer placerat elementum diam, non mattis justo viverra ac.Nulla nec ligula porta, elementum nibh eget, pretium nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum sem turpis, ut pellentesque velit vehicula in. In hac habitasse platea dictumst. Donec varius nunc sit amet ullamcorper iaculis. Sed euismod in dui ac iaculis. Suspendisse ultricies quis nunc a sodales. Donec auctor id urna eget auctor. Integer placerat elementum diam, non mattis justo viverra ac.Nulla nec ligula porta, elementum nibh eget, pretium nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum sem turpis, ut pellentesque velit vehicula in. In hac habitasse platea dictumst. Donec varius nunc sit amet ullamcorper iaculis. Sed euismod in dui ac iaculis. Suspendisse ultricies quis nunc a sodales. Donec auctor id urna eget auctor. Integer placerat elementum diam, non mattis justo viverra ac.
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