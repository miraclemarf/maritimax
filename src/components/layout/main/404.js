import { Card, Image, Divider, Label } from 'semantic-ui-react';

const NotFound = (props) => (
    <div style={{ 'position': 'relative', 'width': '100%', 'height': window.innerHeight + 'px', 'z-index': '10', 'background-image': 'url(/assets/images/Page_404.jpg)', 'background-repeat': 'no-repeat', 'background-size': 'cover', 'background-position': 'center center' }}>
        <a style={{ 'display': 'block', 'position': 'absolute', 'border': 'none', 'width': '210px', 'height': '40px', 'margin': 'auto', 'top': '65%', 'bottom': '0', 'left': '0', 'right': '0' }} href='/'></a>
    </div>
);

export default NotFound;