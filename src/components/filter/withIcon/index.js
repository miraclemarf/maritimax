import { h, Component } from 'preact';
import style from './style';
import { Form, Input, Button, Select, Label, Radio, Image, Grid, Container, Segment, Divider } from 'semantic-ui-react';


export default class FilterWithIcon extends Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = { active: false, value: '' };
  };
  //state = {};
  toggleClass(e) {
    const currentState = this.state.active;
    const val = e.currentTarget.getAttribute("value");
    //console.log(e.currentTarget.getAttribute("value"));

    this.setState({ active: !currentState, value: val });

  };
  handleChange() {
    alert()
  }
  /* handleChange(e, { value }) {
    console.log(value);
    this.setState({ value });
  } */
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <Form action="/search">
        <Container>
          <Grid centered padded>
            <Grid.Row centered>
              <Grid.Column mobile={16} tablet={4} computer={2}>
                <Form.Field >
                  <Button as="a" inverted value='1' style={this.state.value === '1' ? { 'background-color': '#0577CB' } : null} className={style.mainTypeBtn} onClick={this.toggleClass} >
                    <Image style={{
                      'padding-bottom': '20px'
                    }} centered src='/assets/images/buy.png' />
                    <Label className={style.label} basic content='Buy' size={'large'} />
                  </Button>
                  <Radio name='type' className={style.hidden} label='Buy' value='1' checked={value === '1'} onChange={this.handleChange} />
                </Form.Field>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={4} computer={2}>
                <Form.Field>
                  <Button as="a" className={style.mainTypeBtn} inverted value='2' style={this.state.value === '2' ? { 'background-color': '#0577CB' } : null} onClick={this.toggleClass}>
                    <Image style={{
                      'padding-bottom': '12px'
                    }} centered src='/assets/images/charter.png' />
                    <Label className={style.label} basic content='Charter' size={'large'} />
                  </Button>
                  <Radio name='type' className={style.hidden} label='Charter' value='2' checked={value === '2'} onChange={this.handleChange} />
                </Form.Field>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={4} computer={2}>
                <Form.Field>
                  <Button as="a" className={style.mainTypeBtn} inverted value='3' style={this.state.value === '3' ? { 'background-color': '#0577CB' } : null} onClick={this.toggleClass}>
                    <Image style={{
                      'padding-bottom': '12px'
                    }} centered src='/assets/images/request.png' />
                    <Label className={style.label} basic content='Request' size={'large'} />
                  </Button>
                  <Radio className={style.hidden} label='Request' value='3' checked={value === '3'} onChange={this.handleChange} />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Segment style={{ "margin-left": "2.5em", "margin-right": "2.5em" }}>
          <Form.Group>
            <Form.Input className={style.inputNoBorder} fluid icon="search" iconPosition="left" action="Search" width={16}
              placeholder="Terlusuri berdasarkan jenis kargo atau lokasi" />
          </Form.Group>
          <Divider style={{ 'margin-left': '-15px', 'margin-right': '-15px' }} />
          <Form.Group>
            <Label basic size={'large'} className={style.lblPlain} content='Fiter Berdasarkan:' />
          </Form.Group>
          <Form.Group>
            <Form.Field width={3}>
              <Select placeholder="Model Vessel" options={[{ value: "model1", text: "Model 1" },
              { value: "model2", text: "Model 2" }]} style={{ minWidth: "4em" }} />
            </Form.Field>
            <Form.Field width={3}>
              <Select placeholder="Type Charter" options={[{ value: "tc1", text: "Type Charter 1" },
              { value: "tc2", text: "Type Charter 2" }]} style={{ minWidth: "4em" }} />
            </Form.Field>
            <Form.Field control={Input} placeholder="Date" />
            <Form.Field width={3}>
              <Select placeholder="Location" options={[{ value: "Jakarta", text: "Jakarta" },
              { value: "Bandung", text: "Bandung" }, { value: "Surabaya", text: "Surabaya" }]}
                style={{ minWidth: "4em" }} />
            </Form.Field>
            <Form.Field width={3}>
              <Select placeholder="Kapasitas" options={[{ value: "0-500", text: "0 - 500 KG" },
              { value: "500-1000", text: "500 - 1000 KG" }, { value: "1000-2000", text: "1000 - 2000 KG" }]}
                style={{ minWidth: "4em" }} />
            </Form.Field>
            <Form.Field width={3}>
              <Select placeholder="Tahun" options={[{ value: "2018", text: "2018" },
              { value: "2017", text: "2017" }, { value: "2016", text: "2016" }]}
                style={{ minWidth: "4em" }} />
            </Form.Field>
          </Form.Group>
          <Divider hidden />
        </Segment>
        <Divider hidden />
      </Form>
    )
  }
}