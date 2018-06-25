import { h, Component } from 'preact';
import style from './style';
import { history } from '../../../helpers';
import { Form, Input, Button, Select, Label, Radio, Image, Grid, Container, Segment, Divider, Dropdown } from 'semantic-ui-react';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


export default class FilterWithIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booking_type: '',
      city: '',
      description: '',
      available_date: '',
      charter_type_id: '',
      cargo_model_id: '',
      available_capacity: '',
      year_build: '',
      active: false,
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
  };
  //state = {};
  toggleClass(e) {
    const currentState = this.state.active;
    const val = e.currentTarget.getAttribute("value");
    //console.log(e.currentTarget.getAttribute("value"));
    this.setState({ active: !currentState, booking_type: val });

  };
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const booking_type = this.state.booking_type != '' ? `&booking_type=${this.state.booking_type}` : '';
    const city = this.state.city != '' ? `&city=${this.state.city}` : '';
    const description = this.state.description != '' ? `&description=${this.state.description}` : '';
    const available_date = this.state.available_date != '' ? `&available_date=${this.state.available_date.format('YYYY-MM-DD').toString()}` : '';
    const charter_type_id = this.state.charter_type_id != '' ? `&charter_type_id=${this.state.charter_type_id}` : '';
    const cargo_model_id = this.state.cargo_model_id != '' ? `&cargo_model_id=${this.state.cargo_model_id}` : '';
    const available_capacity = this.state.available_capacity != '' ? `&available_capacity=${this.state.available_capacity}` : '';
    const year_build = this.state.year_build != '' ? `&year_build=${this.state.year_build}` : '';
    history.push(`/search?${booking_type}${city}${description}${available_date}${charter_type_id}${cargo_model_id}${available_capacity}${year_build}`);
  }

  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }
  handleChangeDate(date) {
    this.setState({ available_date: date });
  }

  render() {
    const { booking_type, city, active } = this.state;
    const ddModel = [
      { "value": "1", "text": "Cargo Vessle" },
      { "value": "2", "text": "Container Ship" },
      { "value": "3", "text": "Tanker" },
      { "value": "4", "text": "Reefer Ship" }
    ]
    const ddCharter = [
      { "value": "1", "text": "Kapal" },
      { "value": "2", "text": "Service" },
      { "value": "3", "text": "Spareparts" },
      { "value": "4", "text": "Tools" }
    ]
    return (
      <Form autoComplete="off" onSubmit={this.handleSubmit}>
        <Container>
          <Grid centered padded>
            <Grid.Row className={style.rowIcon} centered>
              <Grid.Column mobile={16} tablet={4} computer={2}>
                <Form.Field >
                  <Button as="a" inverted value='buy' style={this.state.booking_type === 'buy' ? { 'background-color': '#0577CB' } : null} className={style.mainTypeBtn} onClick={this.toggleClass} >
                    <Image style={{
                      'padding-bottom': '20px'
                    }} centered src='/assets/images/buy.png' />
                    <Label className={style.label} basic content='Buy' size={'large'} />
                  </Button>
                  <Radio name='booking_type' className={style.hidden} label='Buy' value='buy' checked={booking_type === 'buy'} onChange={this.handleChange} />
                </Form.Field>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={4} computer={2}>
                <Form.Field>
                  <Button as="a" className={style.mainTypeBtn} inverted value='charter' style={this.state.booking_type === 'charter' ? { 'background-color': '#0577CB' } : null} onClick={this.toggleClass}>
                    <Image style={{
                      'padding-bottom': '12px'
                    }} centered src='/assets/images/charter.png' />
                    <Label className={style.label} basic content='Charter' size={'large'} />
                  </Button>
                  <Radio name='booking_type' className={style.hidden} label='Charter' value='charter' checked={booking_type === 'charter'} onChange={this.handleChange} />
                </Form.Field>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={4} computer={2}>
                <Form.Field>
                  <Button as="a" className={style.mainTypeBtn} inverted value='3' href='/contact'>
                    <Image style={{
                      'padding-bottom': '12px'
                    }} centered src='/assets/images/request.png' />
                    <Label className={style.label} basic content='Request' size={'large'} />
                  </Button>
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Segment className={style.formFilter}>
          <Form.Group>
            <Form.Field control={Input} name='description' className={style.inputNoBorder} fluid icon="search" iconPosition="left" action="Search" width={16}
              placeholder="Terlusuri berdasarkan jenis kargo atau lokasi" onChange={this.handleChange} />
          </Form.Group>
          <Divider style={{ 'margin-left': '-15px', 'margin-right': '-15px' }} />
          <Form.Group>
            <Label basic size={'large'} className={style.lblPlain} content='Fiter Berdasarkan:' />
          </Form.Group>
          <Form.Group className={style.collInput}>
            <Form.Field width={3}>
              <Dropdown
                selection name='cargo_model_id' placeholder="Model Vessel" options={ddModel} style={{ minWidth: "4em" }} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field width={3}>
              <Dropdown
                selection name='charter_type_id' placeholder="Type Charter" options={ddCharter} style={{ minWidth: "4em" }} onChange={this.handleChange} />
            </Form.Field>

            <Form.Field className={style.dpicker} width={3}>
              <DatePicker name='available_date' selected={this.state.available_date} onChange={this.handleChangeDate} placeholderText="Date"
              />
            </Form.Field>
            <Form.Field width={3}>
              <Dropdown
                selection
                placeholder="City" name="city" options={[{ value: "", text: "--Choose One--" }, { value: "Jakarta", text: "Jakarta" }, { value: "Bandung", text: "Bandung" }, { value: "Surabaya", text: "Surabaya" }, { value: "Makasar", text: "Makasar" }]} onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field width={3}>
              <Form.Field control={Input} name='available_capacity' placeholder="Kapasitas (Kg)" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field width={3}>
              <Dropdown
                selection name='year_build' placeholder="Tahun" options={[{ value: "", text: "--Choose One--" }, { value: "2018", text: "2018" }, { value: "2017", text: "2017" }, { value: "2016", text: "2016" }, { value: "2015", text: "2015" }]}
                style={{ minWidth: "4em" }} onChange={this.handleChange} />
            </Form.Field>
          </Form.Group>
          <Divider hidden />
        </Segment>
        <Divider hidden />
      </Form>
    )
  }
}