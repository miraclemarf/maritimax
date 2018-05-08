import { Segment, Image, Grid, Button, Divider } from 'semantic-ui-react'
const CardProduct = (props) => (
    <Segment>
        <Grid style={{ 'padding': '1em' }} columns={3} stackable>
            <Grid.Column width={4}>
                <Image src={props.image} />
            </Grid.Column>
            <Grid.Column width={6}>
                <h4 style={{ 'color': '#0577CB', 'margin-bottom': '0' }}>{props.title}</h4>
                <div style={{ 'margin-bottom': '10px', 'color': '#484848' }}>{props.model}</div>
                <span style={{ 'color': '#0577CB', 'font-size': '88%', 'font-style': 'italic' }}>{props.location}</span>
            </Grid.Column>
            <Grid.Column width={6} textAlign={"right"}>
                <Button as="a" href={'/product/detail'} style={{ 'background-color': '#0577CB', 'color': '#fff', 'margin-bottom': '15px' }} >See More</Button>
                <div>
                    <h3 style={{ 'color': '#0577CB' }}>{"Rp. "}{props.price}{"/month"}</h3>
                </div>
                <div style={{ 'color': '#484848', 'margin-bottom': '10px' }}>
                    <strong style={{ 'color': '#0577CB' }}>{props.currentWeight + " Kg"}</strong>{" spaces left, from "}<strong>{props.totalWeight + " Kg"}</strong>
                </div>
                <div style={{ 'font-size': '88%' }}>
                    {"Available time for charter from " + props.dueDate}
                </div>

            </Grid.Column>
        </Grid>
    </Segment>
);

export default CardProduct;