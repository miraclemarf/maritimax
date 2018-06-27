import { h, Component } from 'preact';
import style from './style';
import { connect } from 'react-redux';
import { get_modelvessel, get_chartertype } from '../../../actions/actions_dropdown';
import { history } from '../../../helpers';
import { Form, Input, Button, Select, Label, Radio, Image, Grid, Container, Checkbox, Divider, Dropdown } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class FilterWithCheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            booking_type: '',
            city: '',
            description: '',
            available_date: moment(),
            charter_type_id: '',
            cargo_model_id: '',
            available_capacity: '',
            year_build: '',
            active: false,
            submitted: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.toggleClass = this.toggleClass.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    componentDidMount() {
        this.setState(this.props.passData);
        if (this.props.passData.available_date != undefined) {
            this.setState({ available_date: moment(this.props.passData.available_date) })
        }
        else {
            this.setState({ available_date: null })
        }

        this.props.get_modelvessel();
        this.props.get_chartertype();
    }
    mapModelVessel() {
        const objModel = this.props.filterModel;

        var objNew = objModel.map(function (o) {
            return Object.assign({
                value: o.id,
                text: o.name
            }, _.omit(o, 'id', 'name'));
        });
        objNew = _.concat({ "value": "", "text": "--Choose One--" }, objNew)
        return objNew;
    }

    mapCharterType() {
        const objCharter = this.props.filterCharter;

        var objNew = objCharter.map(function (o) {
            return Object.assign({
                value: o.id,
                text: o.name
            }, _.omit(o, 'id', 'name'));
        });
        objNew = _.concat({ "value": "", "text": "--Choose One--" }, objNew)
        return objNew;
    }
    toggleClass(e) {
        const currentState = this.state.active;
        const val = e.currentTarget.getAttribute("class");
        const type = val.indexOf("checked") != -1 ? 'buy' : 'charter';
        this.setState({ active: !currentState, booking_type: type });

    };
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const booking_type = this.state.booking_type != '' ? `&booking_type=${this.state.booking_type}` : '';
        const city = this.state.city != '' ? `&city=${this.state.city}` : '';
        const description = this.state.description != '' ? `&description=${this.state.description}` : '';
        const available_date = this.state.available_date != null ? `&available_date=${this.state.available_date.format('YYYY-MM-DD').toString()}` : '';
        const charter_type_id = this.state.charter_type_id != '' ? `&charter_type_id=${this.state.charter_type_id}` : '';
        const cargo_model_id = this.state.cargo_model_id != '' ? `&cargo_model_id=${this.state.cargo_model_id}` : '';
        const available_capacity = this.state.available_capacity != '' ? `&available_capacity=${this.state.available_capacity}` : '';
        const year_build = this.state.year_build != '' ? `&year_build=${this.state.year_build}` : '';
        console.log(`/search?${booking_type}${city}${description}${available_date}${charter_type_id}${cargo_model_id}${available_capacity}${year_build}`)
        window.location.href = `/search?${booking_type}${city}${description}${available_date}${charter_type_id}${cargo_model_id}${available_capacity}${year_build}`;

    }
    handleChange(e, { name, value }) {
        console.log(this.state);
        this.setState({ ...this.state, [name]: value });

    }
    handleChangeDate(date) {
        this.setState({ available_date: date });
    }
    render() {
        const { value } = this.state
        const options = [
            { key: 'all', text: 'All', value: 'all' },
            { key: 'articles', text: 'Articles', value: 'articles' },
            { key: 'products', text: 'Products', value: 'products' },
        ]

        const ddModel = [
            { "value": "", "text": "--Choose One--" },
            { "value": "1", "text": "Cargo Vessle" },
            { "value": "2", "text": "Container Ship" },
            { "value": "3", "text": "Tanker" },
            { "value": "4", "text": "Reefer Ship" }
        ]
        const ddCharter = [
            { "value": "", "text": "--Choose One--" },
            { "value": "1", "text": "Kapal" },
            { "value": "2", "text": "Service" },
            { "value": "3", "text": "Spareparts" },
            { "value": "4", "text": "Tools" }
        ]
        return (
            <div class={style.bgwhite}>

                <Form autoComplete="off" onSubmit={this.handleSubmit}>
                    <div style={{ 'position': 'relative' }}>
                        <Form.Group className={style.chkbox} style={{ 'position': 'absolute', 'right': '110px', 'z-index': '100' }}>
                            <Label className={style.noLbl} content="Buy" />
                            <Checkbox toggle checked={this.state.booking_type === 'charter'} onChange={this.toggleClass} />
                            <Radio name='booking_type' className={style.hidden} label='Buy' value='buy' checked={this.state.booking_type === 'buy'} onChange={this.handleChange} />
                            <Radio name='booking_type' className={style.hidden} label='Charter' value='charter' checked={this.state.booking_type === 'charter'} onChange={this.handleChange} />
                            <Label className={style.noLbl} content="Charter" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Field control={Input} autocomplete='off' name='description' className={style.inputNoBorder} fluid icon="search" iconPosition="left" action="Search" width={16} value={this.state.description}
                                placeholder="Terlusuri berdasarkan jenis kargo atau lokasi" onChange={this.handleChange} />
                        </Form.Group>
                    </div>
                    <Divider style={{ 'margin-left': '-15px', 'margin-right': '-15px' }} />
                    <Form.Group>
                        <Label basic size={'large'} className={style.lblPlain} content='Fiter Berdasarkan:' />
                    </Form.Group>
                    <Form.Group className={style.collInput}>
                        <Form.Field width={3}>
                            <Dropdown defaultValue={this.props.passData.cargo_model_id}
                                selection name='cargo_model_id' placeholder="Model Vessel" options={ddModel} style={{ minWidth: "4em" }} onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field width={3}>
                            <Dropdown defaultValue={this.props.passData.charter_type_id}
                                selection name='charter_type_id' placeholder="Type Charter" options={ddCharter} style={{ minWidth: "4em" }} onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field className={style.dpicker} width={3}>
                            <DatePicker name='available_date' selected={this.state.available_date} onChange={this.handleChangeDate} placeholderText="Date"
                            />
                        </Form.Field>
                        <Form.Field width={3}>
                            <Dropdown
                                selection defaultValue={this.props.passData.city}
                                placeholder="City" name="city" options={[{ value: "", text: "--Choose One--" }, { value: "Jakarta", text: "Jakarta" }, { value: "Bandung", text: "Bandung" }, { value: "Surabaya", text: "Surabaya" }, { value: "Makasar", text: "Makasar" }]}
                                style={{ minWidth: "4em" }} onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field width={3}>
                            <Form.Field control={Input} name='available_capacity' placeholder="Kapasitas (Kg)" value={this.props.passData.available_capacity} />
                        </Form.Field>
                        <Form.Field width={3}>
                            <Dropdown
                                selection name='year_build' defaultValue={this.props.passData.year_build} placeholder="Tahun" options={[{ value: "", text: "--Choose One--" }, { value: "2018", text: "2018" }, { value: "2017", text: "2017" }, { value: "2016", text: "2016" }, { value: "2015", text: "2015" }]}
                                style={{ minWidth: "4em" }} onChange={this.handleChange} />
                        </Form.Field>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        filterModel: state.filter.model,
        filterCharter: state.filter.charter
    };
}

export default connect(mapStateToProps, {
    get_modelvessel,
    get_chartertype
})(FilterWithCheckBox);