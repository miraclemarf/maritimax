import { Container, Segment, Breadcrumb } from 'semantic-ui-react';
import style from './style';
const breadCrumb = (props) => (
    <Segment className={style.bcstyle} basic>
        <Container>
            <Breadcrumb>
                <Breadcrumb.Section link>Beranda</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section active>Listing</Breadcrumb.Section>
            </Breadcrumb>
        </Container>
    </Segment>
);

export default breadCrumb;