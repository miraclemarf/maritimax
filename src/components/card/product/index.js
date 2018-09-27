import { Card, Image, Icon, Label, Button, Divider } from 'semantic-ui-react';
import _ from 'lodash';
import style from './style';
import Truncate from 'react-truncate';

import Markup from 'preact-markup';
const CardProduct = (props) => (
  <Card fluid>
    <Card.Content>
      <Card.Header style={{ 'color': '#0577CB', 'margin-bottom': '5px' }}>
        {props.name}
      </Card.Header>
      <Card.Header style={{ 'color': '#343434', 'font-size': '90%' }}>
        {props.cargo_model}
      </Card.Header>
    </Card.Content>
    <div style={{ 'position': 'relative' }}>
    {
    _.isEmpty(props.image_cargo)  ? <div class="sixteen-nine bg-img" style="background-image: url(http://www.sangathipl.com/wp-content/uploads/2016/07/no-image-avaliable.jpg);"></div>
             :
            <div className={'sixteen-nine bg-img'} style={{ 'background-image': 'url(' + encodeURI(props.image_cargo) + ')' }}></div>
        
      }
      <Button style={{
        'background-color': '#0577CB', 'color': '#fff',
        'position': 'absolute', 'top': '20px', 'right': '0', 'margin-right': '0',
        'border-radius': '6px 0 0 6px'
      }}>{'Rp.'}{props.price}</Button>
    </div>
    <Card.Content extra>
      <Card.Description>
        <p className={style.description}>
          <Truncate lines={2}>
            <Markup markup={props.description} type='html' />
          </Truncate>
        </p>
      </Card.Description>
      <Divider hidden />
      <div>
        <div style={{ 'float': 'left' }}>
          <div style={{ 'text-align': 'center', 'top': '-5px', 'position': 'relative' }}>
            <Image src='/assets/images/spaces.png' />
          </div>
          <span style={{ 'color': '#868686', 'font-size': '90%' }}>{props.available_capacity}{'Kg spaces left'}</span>
        </div>
        <Button as="a" href={'/product/detail/' + props.id} style={{ 'background-color': '#0577CB', 'color': '#fff' }} floated='right'>NEGOTIATE</Button>
        <Divider clearing hidden />
      </div>
    </Card.Content>
  </Card>
);

export default CardProduct;