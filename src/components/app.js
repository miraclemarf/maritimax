import { h, Component } from 'preact';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { Router } from 'preact-router';
import AsyncRoute from 'preact-async-route';
import reducers from '../reducers';

import Header from './layout/header';
import Footer from './layout/footer';
//import Home from '../routes/home';
import Profile from '../routes/profile';
import Home from '../routes/home';
import News from '../routes/news';
import NewsDetail from '../routes/news/detail';
import ProductDetail from '../routes/product';
import Search from '../routes/search';
import About from '../routes/about';
import Tac from '../routes/tac';
// import Profile from 'async!../routes/profile';

if (module.hot) {
  require('preact/debug');
}

const createStoreWithMiddleWare = applyMiddleware(promise)(createStore);

export default class App extends Component {
  /** Gets fired when the route changes.
   *  @param {Object} event   "change" event from [preact-router](http://git.io/preact-router)
   *  @param {string} event.url The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div id="app">
        <Header />
        <Provider store={createStoreWithMiddleWare(reducers)}>
          <Router onChange={this.handleRoute}>
            <Home path="/" />
            <Search path="/search" />
            <News path="/news" />
            <NewsDetail path="/news/detail" />
            <ProductDetail path="/product/detail" />
            <About path="/about" />
            <Tac path="/terms-condition" />
            <Profile path="/profile/" user="me" />
            <Profile path="/profile/:user" />
          </Router>
        </Provider>
        <Footer />
      </div>
    );
  }
}
