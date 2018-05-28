import { h, Component } from 'preact';
import { Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../../../helpers';

/* COMPONENTS */
import Header from '../header';
import Footer from '../footer';
import LoginModal from '../../fragment/loginModal';

/* ROUTES */
//import Home from '../routes/home';
import Profile from '../../../routes/profile';
import Home from '../../../routes/home';
import News from '../../../routes/news';
import NewsDetail from '../../../routes/news/detail';
import ProductDetail from '../../../routes/product';
import Search from '../../../routes/search';
import About from '../../../routes/about';
import Tac from '../../../routes/tac';
import Contact from '../../../routes/contact';
import Login from '../../../routes/auth/login';
import Logout from '../../../routes/auth/logout';

export default class Main extends Component {

    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            //dispatch(alertActions.clear());
        });
    }

    render() {
        //const { alert } = this.props;
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Header />
                        <Route path="/" exact component={Home} />
                        <Route path="/search" component={Search} />
                        <Route path="/news" exact component={News} />
                        <Route path="/news/detail" component={NewsDetail} />
                        <Route path="/product/detail" component={ProductDetail} />
                        <Route path="/about" component={About} />
                        <Route path="/terms-condition" component={Tac} />
                        <Route path="/contact" component={Contact} />
                        <Route exact path="/login" render={() => (
                            !localStorage.getItem('user')
                                ? <Login />
                                : <Redirect to="/" />
                        )} />
                        <Route path="/logout" exact component={Logout} />

                        {/* <Profile path="/profile/" user="me" />
                        <Profile path="/profile/:user" /> */}
                    </div>
                </Router>
                <Footer />
            </div>
        );
    }
}

/* function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

export default connect(mapStateToProps)(Main); */