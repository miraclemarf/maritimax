import { h, Component } from 'preact'
import { Modal, Button, Image, Divider } from 'semantic-ui-react'
import Login from '../form/login'
import Register from '../form/register'
import ForgotPassword from '../form/forgotPassword'
import style from "./style";

export default class LoginModal extends Component {
    constructor(props) {
        super(props);

        // reset login status
        //this.props.dispatch(userActions.logout());

        this.state = {
            open: false,
            textBtn: this.props.textBtn,
            styleBtn: this.props.styleBtn,
            visibleLogin: true,
            visibleRegister: false,
            visibleForgot: false,
        };

        this.handleToogle = this.handleToogle.bind(this);

    }


    handleToogle(e) {
        /* this.setState({ visibleLogin: false, visibleRegister: true }); */
        if (e==='register'){
            this.setState({ visibleLogin: false, visibleRegister: true, visibleForgot: false }); 
        }
        if (e==='forgot'){
            this.setState({ visibleLogin: false, visibleRegister: false, visibleForgot: true  }); 
        }
        
        
    }

    //state = { open: false }

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false, visibleLogin: true, visibleRegister: false })

    render() {
        const { loggingIn } = this.props;
        const { visibleLogin, visibleRegister,  visibleForgot, open, size } = this.state;
        const handleToogle = this.handleToogle;
        return (
            <div>
                <Button style={this.state.styleBtn} onClick={this.show('mini')}>{this.state.textBtn}</Button>
                <Modal className={style.loginModal} size={size} open={open} onClose={this.close}>
                    <Modal.Header style={{ "border-bottom": "none" }}>
                        <div style={{ "padding-top": "1em", "padding-bottom": "1em" }}>
                            <Image src='/assets/images/logo2.svg' size='small' centered />
                        </div>
                    </Modal.Header>
                    <Modal.Content style={{ "padding": "0" }}>
                        <Login visible={visibleLogin} handleToogle={handleToogle.bind(this)} />
                        <Register visible={visibleRegister} />
                        <ForgotPassword visible={visibleForgot} handleToogle={handleToogle.bind(this)} />
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}


