import { h, Component } from 'preact'
import { Modal, Divider } from 'semantic-ui-react'
import style from './style'

export default class NegoModal extends Component {
    constructor(props) {
        super(props);

        // reset login status
        //this.props.dispatch(userActions.logout());

        this.state = {
            open: false,
        };
    }

    //state = { open: false }

    close = () => this.setState({ open: false })
    show = (openStatus) => this.setState({ open: openStatus })

    render() {
        const { open, close, price } = this.props;
        return (
            <div>
                <Modal className={style.negoModal} size={'small'} open={this.props.open} onClose={this.props.close}>
                    <Modal.Content>
                        <div style={{ 'text-align': 'center', 'color': '#535353', 'margin': '0 2.5em' }}>
                            <Divider hidden />
                            <h2>Booking <span style={{ 'font-weight': '400' }}>anda sudah kami terima</span></h2>
                            <Divider hidden />
                            <p style={{ 'font-size': '1.2em' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum sem turpis, ut pellentesque velit vehicula in.
                            </p>
                            <h2>Rp 25.000.000</h2>
                            <p style={{ 'font-size': '1.2em' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum sem turpis, ut pellentesque velit vehicula in. In hac habitasse platea dictumst. Donec varius nunc sit amet ullamcorper iaculis.
                            </p>
                            <h2>REK BCA 345345345345</h2>
                            <Divider hidden />
                            <Divider hidden />
                        </div>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}


