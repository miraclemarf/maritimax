import { h, Component } from 'preact';
import style from './style';
import { connect } from 'react-redux';
import { get_modelvessel, get_chartertype, get_cities } from '../../../actions/actions_dropdown';
import { Form, Input, Label, Radio, Checkbox, Divider, Dropdown } from 'semantic-ui-react';
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
        this.props.get_cities();
    }
    mapModelVessel() {
        const objModel = this.props.filterModel;

        var objNew = objModel.map(function (o) {
            return Object.assign({
                value: o.id,
                text: o.name
            }, _.omit(o, 'id', 'name'));
        });
        objNew = _.concat({ "value": "", "text": "Choose One" }, objNew)
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
        objNew = _.concat({ "value": "", "text": "Choose One" }, objNew)
        return objNew;
    }
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

        const ddModel = this.props.filterModel != undefined ? this.mapModelVessel() : []
        const ddCharter = this.props.filterCharter != undefined ? this.mapCharterType() : []
        const ddCities = this.props.filterCities != undefined ? this.mapCities() : []
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
                            <Dropdown defaultValue={this.props.passData.cargo_model_id != undefined ? parseInt(this.props.passData.cargo_model_id) : undefined}
                                selection name='cargo_model_id' placeholder="Model Vessel" options={ddModel} style={{ minWidth: "4em" }} onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field width={3}>
                            <Dropdown defaultValue={this.props.passData.charter_type_id != undefined ? parseInt(this.props.passData.charter_type_id) : undefined}
                                selection name='charter_type_id' placeholder="Type Charter" options={ddCharter} style={{ minWidth: "4em" }} onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field className={style.dpicker} width={3}>
                            <DatePicker name='available_date' selected={this.state.available_date} onChange={this.handleChangeDate} placeholderText="Date"
                            />
                        </Form.Field>
                        <Form.Field width={3}>
                            <Dropdown
                                search selection defaultValue={this.props.passData.city}
                                placeholder="City" name="city" options={ddCities}
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
        filterCharter: state.filter.charter,
        filterCities: state.filter.cities
    };
}

export default connect(mapStateToProps, {
    get_modelvessel,
    get_chartertype,
    get_cities
})(FilterWithCheckBox);