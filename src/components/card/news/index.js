import { Card, Image, Divider, Label } from 'semantic-ui-react';
import style from './style';
import slugify from 'slugify';
import Truncate from 'react-truncate';

import Markup from 'preact-markup';

const CardNews = (props) => (
  <Card fluid style={{
    'box-shadow': 'none'
  }}>
  <a href={"/news/" + props.id + "/" + slugify(props.title, {
        replacement: '-',    // replace spaces with replacement
        remove: /[$*_+~.()'"!\-:@?]/g,        // regex to remove characters
        lower: true          // result in lower case
      })}>
    <div className={'sixteen-nine bg-img'} style={{ 'background-image': 'url(' + encodeURI(props.img_cover) + ')' }}>
    </div>
    </a>
    <Card.Content style={{
      'border': 'none',
      'padding-left': '0',
      'padding-right': '0'
    }}>
      <Card.Header style={{ 'margin-bottom': '15px' }}>
      <a href={"/news/" + props.id + "/" + slugify(props.title, {
        replacement: '-',    // replace spaces with replacement
        remove: /[$*_+~.()'"!\-:@?]/g,        // regex to remove characters
        lower: true          // result in lower case
      })}>
        {props.title}
        </a>
        <Label content={props.category_post} basic
          style={{ 'display': 'block', 'border': 'none', 'padding': '0', 'color': '#0577CB', 'margin-top': '4px', 'font-size': '.7em' }} />
      </Card.Header>
      <p className={style.description}>
        <Truncate lines={3}>
          <Markup markup={props.body} type='html' />
        </Truncate>
      </p>
      <a href={"/news/" + props.id + "/" + slugify(props.title, {
        replacement: '-',    // replace spaces with replacement
        remove: /[$*_+~.()'"!\-:@?]/g,        // regex to remove characters
        lower: true          // result in lower case
      })}>Read More</a>
    </Card.Content>
  </Card>
);

export default CardNews;