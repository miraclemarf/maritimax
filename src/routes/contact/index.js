import { h, Component } from 'preact';
import style from './style';
import { Segment, Container, Grid, Divider, Button, Form, Select, TextArea, Checkbox } from 'semantic-ui-react';
import Promo from '../../components/fragment/promo';

const options = [
    { key: 'rv', text: 'Request Vessel', value: '1' },
]

export default class Contact extends Component {
    render() {
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
                        <Form autoComplete="off">
                            <Grid columns={2} stackable style={{ 'background-color': '#fff', 'padding': '2em', 'box-shadow': '0px 3px 6px 0px rgba(0,0,0,0.16)', 'border-radius': '8px' }}>
                                <Grid.Column width={8}>
                                    <div>
                                        <Form.Input className={style.input} label='Nama Lengkap' type='text' />
                                        <span className={style.inputWording}>As on ID Card (without degree or special characters)</span>
                                    </div>
                                    <Divider hidden />
                                    <div>
                                        <Form.Input className={style.input} label='Mobile Number' type='text' />
                                        <span className={style.inputWording}>e.g. +620817163819260</span>
                                    </div>
                                    <Divider hidden />
                                    <div>
                                        <Form.Input className={style.input} label='Email' type='email' />
                                        <span className={style.inputWording}>e.g. email@example.com</span>
                                    </div>
                                    <Divider hidden />
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <div>
                                        <Form.Field control={Select} label='Apa perihal anda menghubungi kami saat ini?' options={options} placeholder='REQUEST VESSEL' />
                                        <span className={style.inputWording}>silahkan search terlebih dahulu sebelum Request Vessel</span>
                                    </div>
                                    <Divider hidden />
                                    <div style={{ 'margin-bottom': '15px' }}>
                                        <Form.Field control={TextArea} label='Pertanyaan Anda' rows={8} autoHeight />
                                    </div>
                                    <Form.Field control={Checkbox}
                                        label={<label className={style.tc}>Saya setuju dengan <a href="/terms-condition">TERMS & CONDITION</a> yang berlaku.</label>} />
                                    <div style={{ 'text-align': 'center' }}>
                                        <Button fluid style={{ 'background-color': '#0577CB', 'color': '#fff', 'margin-top': '25px', 'padding-top': '1em', 'padding-bottom': '1em', 'max-width': '80%', 'margin-left': 'auto', 'margin-right': 'auto' }} >SEND QUESTION</Button>
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