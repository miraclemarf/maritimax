import { h, Component } from 'preact'
import { Modal, Divider, Button } from 'semantic-ui-react'
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
                            {
                                        this.props.price != '-' ?
                                        <div>
                                        <p style={{ 'font-size': '1.2em' }}>
                                            Total tagihan yang harus dibayar sesuai pemesanan adalah :
                                        </p>
                                        <h2>Rp {this.props.price}</h2>
                                        <p style={{ 'font-size': '1.2em' }}>
                                            Silahkan lakukan transfer ke Rekening bank berikut :
                                        </p>
                                        <h2>BCA 8990277142 an Gusti Reza</h2>
                                    </div>
                                            : 
                                            <div>
                                        <p style={{ 'font-size': '1.2em' }}>
                                            Terima kasih telah melakukan pemesanan selanjutnya team kami akan melakukan verifikasi data dan akan menghubungi melalui Email dan No Telepon yang sudah Anda berikan.
                                        </p>
                                    </div>
                                    }
                           
                           <Divider hidden />
                           <Button primary size="big" onClick={this.props.close}>Kembali ke Beranda</Button>
                            <Divider hidden />
                            <Divider hidden />
                        </div>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}


