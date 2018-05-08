import { Card, Image, Divider, Label } from 'semantic-ui-react';
import style from './style';
import Truncate from 'react-truncate';

const CardNews = (props) => (
  <Card fluid style={{
    'box-shadow': 'none'
  }}>
    <Image fluid src={props.image} />
    <Card.Content style={{
      'border': 'none',
      'padding-left': '0',
      'padding-right': '0'
    }}>
      <Card.Header style={{ 'margin-bottom': '15px' }}>
        {props.title}
        <Label content={props.category} basic
          style={{ 'display': 'block', 'border': 'none', 'padding': '0', 'color': '#0577CB', 'margin-top': '4px', 'font-size': '.7em' }} />
      </Card.Header>
      <p className={style.description}>
        <Truncate lines={3}>
          {props.body}
        </Truncate>
      </p>
      <a href="/news/detail">Read More</a>
    </Card.Content>
  </Card>
);

export default CardNews;