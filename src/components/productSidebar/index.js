import {Divider } from 'semantic-ui-react';
import style from './style';

const ProductSidebar = (props) => (
    <div>
    <h2 style={{ 'color': '#0577CB', 'margin-bottom': '0' }}>{props.name}</h2>
    <div style={{ 'margin-bottom': '5px', 'color': '#484848' }}>{props.cargo_model}</div>
    <span style={{ 'color': '#0577CB', 'font-size': '92%', 'font-style': 'italic' }}>{props.location}, {props.city}</span>
    <hr style={{ 'border-color': '#DBDBDB', 'background': 'transparent' }} />
    <div>
        <div className={style.left}>
            <h5>{'Model Vessel'}</h5>
        </div>
        <div className={style.right}>
            <h5>{': ' + props.cargo_model}</h5>
        </div>
        <Divider hidden clearing />
    </div>
    <div>
        <div className={style.left}>
            <h5>{'Jenis Charter'}</h5>
        </div>
        <div className={style.right}>
            <h5>{': ' + props.charter_type}</h5>
        </div>
        <Divider hidden clearing />
    </div>
    <div>
        <div className={style.left}>
            <h5>{'Dimensi'}</h5>
        </div>
        <div className={style.right}>
            <h5>{': ' + props.dimension + ' cm'}</h5>
        </div>
        <Divider hidden clearing />
    </div>
    <div>
        <div className={style.left}>
            <h5>{'Lebar'}</h5>
        </div>
        <div className={style.right}>
            <h5>{': ' + props.width + ' cm'}</h5>
        </div>
        <Divider hidden clearing />
    </div>
    <div>
        <div className={style.left}>
            <h5>{'Year Built'}</h5>
        </div>
        <div className={style.right}>
            <h5>{': ' + props.year_build}</h5>
        </div>
        <Divider hidden clearing />
    </div>
    <div>
        <div className={style.left}>
            <h5>{'Flag'}</h5>
        </div>
        <div className={style.right}>
            <h5>{': ' + props.flag}</h5>
        </div>
        <Divider hidden clearing />
    </div>
    <div>
        <div className={style.left}>
            <h5>{'Area of Service'}</h5>
        </div>
        <div className={style.right}>
            <h5>{': ' + props.area_of_service}</h5>
        </div>
        <Divider hidden clearing />
    </div>
    <div>
        <div className={style.left}>
            <h5>{'Kapasitas Muatan'}</h5>
        </div>
        <div className={style.right}>
            <h5>{': ' + props.load_capacity + ' Kg'}</h5>
        </div>
        <Divider hidden clearing />
    </div>
    <div>
        <div>
            <h2 style={{ 'color': '#0577CB' }}>{"Rp. "}{props.price}{"/Month"}</h2>
        </div>
        <div style={{ 'font-size': '92%', 'margin-bottom': '10px', 'color': '#535353' }}>
            {"Available time for charter from " + props.available_start + " - " + props.available_end}
        </div>
        <div style={{ 'color': '#484848', 'margin-bottom': '10px' }}>
            <strong style={{ 'color': '#0577CB' }}>{props.available_capacity + " Kg"}</strong>{" spaces left, from "}<strong>{props.load_capacity + " Kg"}</strong>
        </div>
        {/* <div style={{ 'font-size': '88%', 'margin-bottom': '10px', 'color': '#535353' }}>
    {"Call for Price if price hidden"}
</div> */}
    </div>
</div>
);

export default ProductSidebar;