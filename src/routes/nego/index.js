import { h, Component } from 'preact';
import { connect } from 'react-redux';
import { get_product } from '../../actions';
import { post_booking } from '../../actions';
import NegoModal from '../../components/fragment/negoModal';
import style from './style';
import DatePicker from 'react-datepicker';
import { get_cities } from '../../actions/actions_dropdown';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { Segment, Container, Grid, Header, Divider, Dropdown, Button, Form } from 'semantic-ui-react';

class Nego extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cargo_id: '',
            fullname: '',
            email: '',
            phone_number: '',
            capacity: '',
            destination_from: '',
            destination_to: '',
            date: '',
            submitted: false,
            openModal: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        //this.bookingConfirm = this.bookingConfirm.bind(this);
        this.closeModal = this.closeModal.bind(this);
    };
    mapCities() {
        const objCities = this.props.filterCities;
        var objNew = objCities.map(function (o) {
            return Object.assign({
                value: o.name,
                text: o.name
            }, _.omit(o, 'name'));
        });
        objNew = _.concat({ "value": "", "text": "Choose One" }, objNew)
        return objNew;
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.get_product(id);
        this.props.get_cities();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.booking !== this.props.booking) {
            this.setState({ openModal: nextProps.booking.success });
        }
    }
    handleChangeDate(date) {
        this.setState({ date: date });
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const formBody = {
            'cargo_id': this.props.product.id,
            'fullname': this.state.fullname,
            'email': this.state.email,
            'phone_number': this.state.phone_number,
            'capacity': this.state.capacity,
            'destination_from': this.state.destination_from,
            'destination_to': this.state.destination_to,
            'date': this.state.date.toString()

        };
        this.props.post_booking(formBody);

    }

    renderBtnNego() {
        if (!_.isEmpty(this.props.auth)) {
            if (!_.isEmpty(this.props.product)) {
                return (<Button fluid style={{ 'background-color': '#0577CB', 'color': '#fff', 'margin-bottom': '8px', 'max-width': '90%' }} type='submit'>NEGOTIATE</Button>);
            }
        } else {
            return (<Button disabled fluid style={{ 'background-color': '#DBDBDB', 'color': '#fff', 'margin-bottom': '8px', 'max-width': '90%', 'cursor': 'not-allowed' }} >NEGOTIATE</Button>);
        }

    }
    closeModal() {
        //console.log(this.props.booking);
        window.location.href = '/';
        //return false;
    }

    render() {
        const ddCities = this.props.filterCities != undefined ? this.mapCities() : []
        if (!_.isEmpty(this.props.auth) && !_.isEmpty(this.props.product)) {
            return (
                <div style={{ 'padding-top': '5.5em', 'background-color': '#F4F4F4', 'border-bottom': '1px solid #DBDBDB' }}>
                    <Segment style={{ 'padding': '0' }} basic>{ /*SINGLE PROMO*/}
                        <Container style={{ 'margin': '4em 0' }}>
                            <Form autoComplete="off" className={'form-nego'} onSubmit={this.handleSubmit}>
                                <Grid columns={2} stackable>
                                    <Grid.Column width={11}>
                                        <h2 style={{ 'color': '#535353' }}>{'Contact Details'}</h2>
                                        <div style={{ 'background-color': '#fff', 'padding': '2em', 'box-shadow': '0px 3px 6px 0px rgba(0,0,0,0.16)', 'border-radius': '8px' }}>
                                            <Grid stackable>
                                                <Grid.Row>
                                                    <Grid.Column>
                                                        <div className={'use-caption w-margin'}>
                                                            <Form.Input name='fullname' onChange={this.handleChange} label='Full Name' required />
                                                            <small>As on ID Card (without degree or speacial character)</small>
                                                        </div>
                                                    </Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <Grid.Column width={8}>
                                                        <div className={'use-caption w-margin'}>
                                                            <Form.Input name='phone_number' onChange={this.handleChange} label='Mobile Number' required />
                                                            <small>e.g +628127002322</small>
                                                        </div>
                                                    </Grid.Column>
                                                    <Grid.Column width={8}>
                                                        <div className={'use-caption w-margin'}>
                                                            <Form.Input type="email" name='email' onChange={this.handleChange} fluid label='Email' />
                                                            <small>e.g email@example.com</small>
                                                        </div>
                                                    </Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <Grid.Column width={8}>
                                                        <div className={'use-caption w-margin'}>
                                                            <Form.Input required name='capacity' onChange={this.handleChange} fluid label='Capacity (Kg)' />
                                                            <small>Satuan berat dalam Kg</small>
                                                        </div>
                                                    </Grid.Column>
                                                    <Grid.Column width={4}>
                                                        <div className={'use-caption w-margin'}>
                                                            {/* <Form.Input name='destination_from' onChange={this.handleChange} fluid label='Destination From' /> */}
                                                            <Form.Field>
                                                                <label for="">Destination From</label>
                                                                <Dropdown compact
                                                                    search selection name="destination_from" options={ddCities} onChange={this.handleChange}
                                                                />
                                                            </Form.Field>
                                                        </div>
                                                    </Grid.Column>
                                                    <Grid.Column width={4}>
                                                        <div className={'use-caption w-margin'}>
                                                            {/*  <Form.Input name='destination_to' onChange={this.handleChange} fluid label='Destination To' /> */}
                                                            <Form.Field>
                                                                <label for="">Destination To</label>
                                                                <Dropdown compact
                                                                    search selection name="destination_to" options={ddCities} onChange={this.handleChange}
                                                                />
                                                            </Form.Field>
                                                        </div>
                                                    </Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <Grid.Column width={8}>
                                                        <div className={'use-caption w-margin'}>
                                                            <div className={'field'}>
                                                                <label for="">Date</label>
                                                                <DatePicker name='date' selected={this.state.date} onChange={this.handleChangeDate} className="ui fluid input" dateFormat="YYYY-MM-DD" />
                                                            </div>
                                                        </div>
                                                    </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <div style={{ 'background-color': '#fff', 'padding': '2em', 'box-shadow': '0px 3px 6px 0px rgba(0,0,0,0.16)', 'border-radius': '8px' }}>
                                            <h2 style={{ 'color': '#0577CB', 'margin-bottom': '0' }}>{this.props.product.name}</h2>
                                            <div style={{ 'margin-bottom': '5px', 'color': '#484848' }}>{this.props.product.cargo_model}</div>
                                            <span style={{ 'color': '#0577CB', 'font-size': '92%', 'font-style': 'italic' }}>{this.props.product.location}, {this.props.product.city}</span>
                                            <hr style={{ 'border-color': '#DBDBDB', 'background': 'transparent' }} />
                                            <div>
                                                <div className={style.left}>
                                                    <h5>{'Model Vessel'}</h5>
                                                </div>
                                                <div className={style.right}>
                                                    <h5>{': ' + this.props.product.cargo_model}</h5>
                                                </div>
                                                <Divider hidden clearing />
                                            </div>
                                            <div>
                                                <div className={style.left}>
                                                    <h5>{'Jenis Charter'}</h5>
                                                </div>
                                                <div className={style.right}>
                                                    <h5>{': ' + this.props.product.charter_type}</h5>
                                                </div>
                                                <Divider hidden clearing />
                                            </div>
                                            <div>
                                                <div className={style.left}>
                                                    <h5>{'Dimensi'}</h5>
                                                </div>
                                                <div className={style.right}>
                                                    <h5>{': ' + this.props.product.dimension + ' cm'}</h5>
                                                </div>
                                                <Divider hidden clearing />
                                            </div>
                                            <div>
                                                <div className={style.left}>
                                                    <h5>{'Lebar'}</h5>
                                                </div>
                                                <div className={style.right}>
                                                    <h5>{': ' + this.props.product.width + ' cm'}</h5>
                                                </div>
                                                <Divider hidden clearing />
                                            </div>
                                            <div>
                                                <div className={style.left}>
                                                    <h5>{'Year Built'}</h5>
                                                </div>
                                                <div className={style.right}>
                                                    <h5>{': ' + this.props.product.year_build}</h5>
                                                </div>
                                                <Divider hidden clearing />
                                            </div>
                                            <div>
                                                <div className={style.left}>
                                                    <h5>{'Flag'}</h5>
                                                </div>
                                                <div className={style.right}>
                                                    <h5>{': ' + this.props.product.flag}</h5>
                                                </div>
                                                <Divider hidden clearing />
                                            </div>
                                            <div>
                                                <div className={style.left}>
                                                    <h5>{'Area of Service'}</h5>
                                                </div>
                                                <div className={style.right}>
                                                    <h5>{': ' + this.props.product.area_of_service}</h5>
                                                </div>
                                                <Divider hidden clearing />
                                            </div>
                                            <div>
                                                <div className={style.left}>
                                                    <h5>{'Kapasitas Muatan'}</h5>
                                                </div>
                                                <div className={style.right}>
                                                    <h5>{': ' + this.props.product.load_capacity + ' Kg'}</h5>
                                                </div>
                                                <Divider hidden clearing />
                                            </div>
                                            <div>
                                                <div>
                                                    <h2 style={{ 'color': '#0577CB' }}>{"Rp. "}{this.props.product.price}{"/Month"}</h2>
                                                </div>
                                                <div style={{ 'font-size': '92%', 'margin-bottom': '10px', 'color': '#535353' }}>
                                                    {"Available time for charter from " + this.props.product.available_start + " - " + this.props.product.available_end}
                                                </div>
                                                <div style={{ 'color': '#484848', 'margin-bottom': '10px' }}>
                                                    <strong style={{ 'color': '#0577CB' }}>{this.props.product.available_capacity + " Kg"}</strong>{" spaces left, from "}<strong>{this.props.product.load_capacity + " Kg"}</strong>
                                                </div>
                                                {this.renderBtnNego()}
                                                <NegoModal open={this.state.openModal} close={this.closeModal} />
                                                {/* <div style={{ 'font-size': '88%', 'margin-bottom': '10px', 'color': '#535353' }}>
                                            {"Call for Price if price hidden"}
                                        </div> */}
                                            </div>
                                        </div>
                                    </Grid.Column>
                                </Grid>
                            </Form>

                            <Divider hidden />
                        </Container>
                    </Segment >
                </div >
            );
        }
    }
}
function mapStateToProps(state) {
    return {
        auth: state.auth,
        product: state.products,
        booking: state.booking,
        filterCities: state.filter.cities
    };
}

export default connect(mapStateToProps, {
    get_product,
    post_booking,
    get_cities
})(Nego);
