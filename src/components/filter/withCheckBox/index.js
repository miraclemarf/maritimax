import { h, Component } from 'preact';
import style from './style';
import { Form, Input, Button, Select, Label, Radio, Image, Grid, Container, Checkbox, Divider } from 'semantic-ui-react';


export default class FilterWithCheckBox extends Component {
    render() {
        const { value } = this.state
        const options = [
            { key: 'all', text: 'All', value: 'all' },
            { key: 'articles', text: 'Articles', value: 'articles' },
            { key: 'products', text: 'Products', value: 'products' },
        ]
        return (
            <div class={style.bgwhite}>
                <Form>
                    <div style={{ 'position': 'relative' }}>
                        <Form.Group className={style.chkbox} style={{ 'position': 'absolute', 'right': '110px', 'z-index': '100' }}>
                            <Label className={style.noLbl} content="Buy" />
                            <Checkbox toggle checked={this.props.passData === "2" ? true : false} />
                            <Label className={style.noLbl} content="Charter" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input className={style.inputNoBorder} fluid icon="search" iconPosition="left" action="Search" width={16}
                                placeholder="Terlusuri berdasarkan jenis kargo atau lokasi" />
                        </Form.Group>
                    </div>
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
                </Form>
            </div>
        )
    }
}