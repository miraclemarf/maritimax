import { Segment, Image, Grid, Button, Divider } from 'semantic-ui-react'
const CardProduct = (props) => (
    <Segment>
        <Grid style={{ 'padding': '1em' }} columns={3} stackable>
            <Grid.Column width={4}>
             {
            _.isEmpty(props.image_cargo)  ? <div class="sixteen-nine bg-img" style="background-image: url(http://www.sangathipl.com/wp-content/uploads/2016/07/no-image-avaliable.jpg);"></div>
                    :
                    <div className={'sixteen-nine bg-img'} style={{ 'background-image': 'url(' + encodeURI(props.image_cargo) + ')' }}></div>
                
            }
            </Grid.Column>
            <Grid.Column width={6}>
                <h4 style={{ 'color': '#0577CB', 'margin-bottom': '0' }}>{props.name}</h4>
                <div style={{ 'margin-bottom': '10px', 'color': '#484848' }}>{props.cargo_model}</div>
                <span style={{ 'color': '#0577CB', 'font-size': '88%', 'font-style': 'italic' }}>{props.city}</span>
            </Grid.Column>
            <Grid.Column width={6} textAlign={"right"}>
                <Button as="a" href={'/product/detail/' + props.id} style={{ 'background-color': '#0577CB', 'color': '#fff', 'margin-bottom': '15px' }} >See More</Button>
                <div>
                    <h3 style={{ 'color': '#0577CB' }}>{"Rp. "}{props.price}{"/month"}</h3>
                </div>
                <div style={{ 'color': '#484848', 'margin-bottom': '10px' }}>
                    <strong style={{ 'color': '#0577CB' }}>{props.available_capacity + " Kg"}</strong>{" spaces left, from "}<strong>{props.load_capacity + " Kg"}</strong>
                </div>
                <div style={{ 'font-size': '88%' }}>
                    {"Available time for charter from " + props.available_start}
                </div>

            </Grid.Column>
        </Grid>
    </Segment>
);

export default CardProduct;