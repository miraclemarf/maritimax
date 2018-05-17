import { h, Component } from 'preact';
import { connect } from 'react-redux';
import { logout } from '../../actions';

class Logout extends Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(logout());
    }

    render() {
        return ({});
    }
}
function mapStateToProps(state) {
    return { state };
}

export default connect(mapStateToProps)(Logout);