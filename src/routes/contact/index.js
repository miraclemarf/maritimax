import { h, Component } from 'preact';
import style from './style';
import { connect } from 'react-redux';
import { post_request } from '../../actions';
import { Segment, Container, Grid, Divider, Button, Form, Select, TextArea, Checkbox } from 'semantic-ui-react';
import Promo from '../../components/fragment/promo';



class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            email: '',
            phone_number: '',
            topic: '',
            question: '',
            submitted: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    componentWillReceiveProps(nextProps) {
        console.log('asd');
        if (nextProps.request !== this.props.request) {

            window.location.href = '/';
        }
    }
    handleChange(e, props) {
        const { name, value } = props;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const formBody = {
            'fullname': this.state.fullname,
            'email': this.state.email,
            'phone_number': this.state.phone_number,
            'topic': this.state.topic,
            'question': this.state.question

        };
        this.props.post_request(formBody);

    }

    render() {
        const options = [
            { text: 'Request Vessel', value: 'Request Vessel' }, { text: 'Charter', value: 'Charter' }
        ]

        return (
            <div style={{ 'padding-top': '5.5em', 'background-color': '#F4F4F4', 'border-bottom': '1px solid #DBDBDB' }}>
                <Segment style={{ 'padding': '0' }} basic>{ /*SINGLE PROMO*/}
                    <Container style={{ 'margin': '4em 0', 'width': '60%' }}>
                        <div style={{ 'text-align': 'center' }}>
                            <h1>Contact Kami untuk Petanyaan atau <b style={{ 'color': '#0577CB' }}>Request Vessel</b></h1>
                            <p style={{ 'color': '#767676' }}>
                                Nulla nec ligula porta, elementum nibh eget, pretium nisl. Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. Quisque vestibulum sem turpis, ut pellentesque velit vehicula
                            </p>
                            <Divider clearing hidden />
                            <Divider clearing hidden />
                        </div>
                        <Form autoComplete="off" onSubmit={this.handleSubmit}>
                            <Grid columns={2} stackable style={{ 'background-color': '#fff', 'padding': '2em', 'box-shadow': '0px 3px 6px 0px rgba(0,0,0,0.16)', 'border-radius': '8px' }}>
                                <Grid.Column width={8}>
                                    <div>
                                        <Form.Input required onChange={this.handleChange} name="fullname" className={style.input} label='Nama Lengkap' type='text' />
                                        <span className={style.inputWording}>As on ID Card (without degree or special characters)</span>
                                    </div>
                                    <Divider hidden />
                                    <div>
                                        <Form.Input required onChange={this.handleChange} name="phone_number" className={style.input} label='Mobile Number' type='text' />
                                        <span className={style.inputWording}>e.g. +620817163819260</span>
                                    </div>
                                    <Divider hidden />
                                    <div>
                                        <Form.Input required onChange={this.handleChange} name="email" className={style.input} label='Email' type='email' />
                                        <span className={style.inputWording}>e.g. email@example.com</span>
                                    </div>
                                    <Divider hidden />
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <div>
                                        <Form.Field>
                                            <label>Apa perihal anda menghubungi kami saat ini?</label>
                                            <Select required onChange={this.handleChange} name="topic" options={options} placeholder='REQUEST VESSEL' />
                                            <span className={style.inputWording}>silahkan search terlebih dahulu sebelum Request Vessel</span>
                                        </Form.Field>
                                    </div>
                                    <Divider hidden />
                                    <div style={{ 'margin-bottom': '15px' }}>
                                        <Form.Field>
                                            <label>{'Pertanyaan Anda'}</label>
                                            <TextArea onChange={this.handleChange} value={this.state.question} name="question" label='Pertanyaan Anda' rows={8} autoHeight />
                                        </Form.Field>
                                    </div>
                                    <Form.Field control={Checkbox}
                                        label={<label className={style.tc}>Saya setuju dengan <a href="/terms-condition">TERMS & CONDITION</a> yang berlaku.</label>} />
                                    <div style={{ 'text-align': 'center' }}>
                                        <Button type="submit" fluid style={{ 'background-color': '#0577CB', 'color': '#fff', 'margin-top': '25px', 'padding-top': '1em', 'padding-bottom': '1em', 'max-width': '80%', 'margin-left': 'auto', 'margin-right': 'auto' }} >SEND QUESTION</Button>
                                    </div>
                                </Grid.Column>
                            </Grid>
                        </Form>
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
        request: state.request
    };
}

export default connect(mapStateToProps, {
    post_request
})(Contact);
