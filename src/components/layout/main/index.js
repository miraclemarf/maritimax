import { h, Component } from 'preact';
import { Route, Redirect, Switch } from 'react-router-dom';
//import { connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { history } from '../../../helpers';

/* COMPONENTS */
import Header from '../header';
import Footer from '../footer';

/* ROUTES */
//import Home from '../routes/home';
import Home from '../../../routes/home';
import News from '../../../routes/news';
import NewsDetail from '../../../routes/news/detail';
import ProductDetail from '../../../routes/product';
import Nego from '../../../routes/nego';
import ListCharter from '../../../routes/product/listCharter';
import Search from '../../../routes/search';
import About from '../../../routes/about';
import Tac from '../../../routes/tac';
import Contact from '../../../routes/contact';
import Login from '../../../routes/auth/login';
import Logout from '../../../routes/auth/logout';
import NotFound from './404.js';

export default class Main extends Component {

    constructor(props) {
        super(props);

        //const { dispatch } = this.props;
        //history.listen((location, action) => {
        // clear alert on location change
        //dispatch(alertActions.clear());
        //});
    }

    render() {
        //const { alert } = this.props;
        return (
            <div>
                <ConnectedRouter history={history}>
                    <div>
                        <Route exact path={['/', '/search', '/news', '/news/:id/:slug', '/product/detail/:id', '/product/detail/:id/negotiate', '/about', '/contact', '/terms-condition']} component={Header} />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/search" component={Search} />

                            <Route path="/charter" component={ListCharter} />
                            <Route path="/news" exact component={News} />
                            <Route path="/news/:id/:slug" exact component={NewsDetail} />
                            <Route exact path="/product/detail/:id" component={ProductDetail} />
                            <Route exact path="/product/detail/:id/negotiate" component={Nego} />
                            <Route path="/about" component={About} />
                            <Route path="/terms-condition" component={Tac} />
                            <Route path="/contact" component={Contact} />
                            <Route exact path="/login" render={() => (
                                !localStorage.getItem('user')
                                    ? <Login />
                                    : <Redirect to="/" />
                            )} />
                            <Route path="/logout" exact component={Logout} />
                            <Route component={NotFound} />
                        </Switch>
                        {/* <Profile path="/profile/" user="me" />
                        <Profile path="/profile/:user" /> */}

                        <Route exact path={['/', '/search', '/news', '/news/:id/:slug', '/product/detail/:id', '/product/detail/:id/negotiate', '/about', '/contact', '/terms-condition']} component={Footer} />
                    </div>
                </ConnectedRouter>
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
