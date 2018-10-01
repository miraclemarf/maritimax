
import { Container, Divider, Grid, Header, List, Segment, Button, Icon } from 'semantic-ui-react'
const Footer = (props) => (
    <div>
        <Segment vertical style={{
            padding: '3em 0 5em'
        }}>
            <Container>
                <Grid columns={3} stackable>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Header as='h4' content='Company' style={{ 'color': '#343434' }} />
                            <Divider hidden />
                            <p style={{ 'color': '#868686', 'line-height': '28px' }}>
                                E-mail: maritimaxcom@gmail.com <br />
                                Address: Jl. Bendi Besar No. 12, Jakarta Selatan 12240<br />
                                CP: +62 812 1569 2727
                            </p>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Header as='h4' content='Useful Links' style={{ 'color': '#343434' }} />
                            <Divider hidden />
                            <p style={{ 'color': '#868686', 'line-height': '28px' }}>
                                <a href="http://hubla.dephub.go.id/Default.aspx" target="_blank">Dirjen Hubla</a><br />
                                <a href="https://www.pelindo1.co.id/id/Default.aspx" target="_blank">Pelindo I</a><br />
                                <a href="http://www.indonesiaport.co.id/" target="_blank">Pelindo II</a><br />
                                <a href="https://www.pelindo.co.id/" target="_blank">Pelindo III</a><br />
                                <a href="http://www.beacukai.go.id/" target="_blank">Bea Cukai</a><br />
                                <a href="http://www.pajak.go.id/" target="_blank">Pajak</a><br />
                            </p>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header as='h4' content='News Source' style={{ 'color': '#343434' }} />
                            <Divider hidden />
                            <p style={{ 'color': '#868686', 'line-height': '28px' }}>
                                <a href="http://www.insa-id.org/" target="_blank">E-Maritim</a><br />
                                <a href="https://maritimenews.id/" target="_blank">Maritime News</a><br />
                                <a href="https://jurnalmaritim.com/" target="_blank">Jurnal Maritim</a><br />
                            </p>
                        </Grid.Column>
                        <Grid.Column floated='right' width={5} textAlign='right'>
                            <Divider hidden />
                            <Button as='a' href='/contact' style={{
                                'color': '#fff', 'background': '#0577cb', 'min-width': '210px', 'font-weight': '400'
                            }}>
                                <Icon inverted style={{ 'opactiy': '1' }} name='mail outline' size='large' /> Request Vessel Email
                            </Button>
                            <Divider hidden />
                            <Divider hidden />
                            <List horizontal>
                                {/* <List.Item>
                                    <Icon circular style={{ 'background-color': '#0577CB', 'color': '#fff', 'border-color': '#0577CB', 'box-shadow': 'none' }} size='large' name='twitter' />
                                </List.Item> */}
                                <List.Item>
                                <a href="https://www.instagram.com/maritimaxofficial/" target="_blank">
                                    <Icon circular style={{ 'background-color': '#0577CB', 'color': '#fff', 'border-color': '#0577CB', 'box-shadow': 'none' }} size='large' name='instagram' />
                                    </a>
                                </List.Item>
                                <List.Item>
                                <a href="https://www.facebook.com/?stype=lo&jlou=Afd0emwMH5X_jFBbvX4Iog_pMkXkNSJjW2Zza0OfJvrCBrnpAx0NxiZ4l1U-BaQkgUyu75C04VgiVn0XQ73PcWL_j4YgthhrN1jyn1CF7GsjOw&smuh=30541&lh=Ac_C2g0bmyL9Xmpi" target="_blank">
                                    <Icon circular style={{ 'background-color': '#0577CB', 'color': '#fff', 'border-color': '#0577CB', 'box-shadow': 'none' }} size='large' name='facebook f' />
                                    </a>
                                </List.Item>
                                {/* <List.Item>
                                    <a href="#" target="_blank">
                                    <Icon circular style={{ 'background-color': '#0577CB', 'color': '#fff', 'border-color': '#0577CB', 'box-shadow': 'none' }} size='large' name='google' />
                                    </a>
                                </List.Item> */}
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
                    <List.Item style={{ 'border-color': 'rgba(255,255,255,1)', 'line-height': 'normal' }}>© Copyright 2018 MARITIMAX. All Rights Reserved | <a href='/terms-condition'>TERMS & CONDITIONS</a></List.Item>
                </List>
            </Container>
        </Segment>
    </div>
);
export default Footer;