
import { Container, Divider, Grid, Header, List, Segment, Button, Icon } from 'semantic-ui-react'
const Footer = (props) => (
    <div>
        <Segment vertical style={{
            padding: '3em 0 5em'
        }}>
            <Container>
                <Grid columns={3} stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header as='h4' content='Company' style={{ 'color': '#343434' }} />
                            <Divider hidden />
                            <p style={{ 'color': '#868686', 'line-height': '28px' }}>
                                Jl.taman sari 2 no 56<br />
                                Jakarta Barat, DKI Jakarta 11640<br />
                                0813110xx516<br />
                                Jam Kerja : 9AM - 5PM
                            </p>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header as='h4' content='Useful Links' style={{ 'color': '#343434' }} />
                            <Divider hidden />
                            <p style={{ 'color': '#868686', 'line-height': '28px' }}>
                                Travel<br /> Safe Stay<br /> Healthy<br /> Flight Monitor<br /> Booking List<br /> Lost Lugage<br /> World Clock
                            </p>
                        </Grid.Column>
                        <Grid.Column floated='right' width={5} textAlign='right'>
                            <Divider hidden />
                            <Button style={{
                                'color': '#fff', 'background': '#0577cb', 'min-width': '210px', 'font-weight': '400'
                            }}>
                                <Icon inverted style={{ 'opactiy': '1' }} name='mail outline' size='large' /> Request Vessel Email
                            </Button>
                            <Divider hidden />
                            <Divider hidden />
                            <List horizontal>
                                <List.Item>
                                    <Icon circular style={{ 'background-color': '#0577CB', 'color': '#fff', 'border-color': '#0577CB', 'box-shadow': 'none' }} size='large' name='twitter' />
                                </List.Item>
                                <List.Item>
                                    <Icon circular style={{ 'background-color': '#0577CB', 'color': '#fff', 'border-color': '#0577CB', 'box-shadow': 'none' }} size='large' name='instagram' />
                                </List.Item>
                                <List.Item>
                                    <Icon circular style={{ 'background-color': '#0577CB', 'color': '#fff', 'border-color': '#0577CB', 'box-shadow': 'none' }} size='large' name='facebook f' />
                                </List.Item>
                                <List.Item>
                                    <Icon circular style={{ 'background-color': '#0577CB', 'color': '#fff', 'border-color': '#0577CB', 'box-shadow': 'none' }} size='large' name='google plus' />
                                </List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
        <Segment inverted style={{
            margin: '0',
            'background-color': '#0577cb'
        }}>
            <Container>
                <List horizontal inverted divided>
                    <List.Item style={{ 'border-color': 'rgba(255,255,255,1)' }}>© Copyright 2018 MARITIMAX. All Rights Reserved</List.Item>
                    <List.Item as='a' href='#'>TERMS & CONDITIONS</List.Item>
                </List>
            </Container>
        </Segment>
    </div>
);
export default Footer;