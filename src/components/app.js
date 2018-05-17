import { h, Component } from 'preact';
import { Provider } from 'react-redux'
import { store } from '../helpers';
import Main from './layout/main';

// import Profile from 'async!../routes/profile';

if (module.hot) {
  require('preact/debug');
}

export default class App extends Component {
  /** Gets fired when the route changes.
   *  @param {Object} event   "change" event from [preact-router](http://git.io/preact-router)
   *  @param {string} event.url The newly routed URL
   */
  /*  handleRoute = e => {
     this.currentUrl = e.url;
     if (typeof window !== "undefined") {
       window.scrollTo(0, 0);
     }
   }; */

  render() {
    return (
      <div id="app">
        <Provider store={store}>
          <Main />
        </Provider>
      </div>
    );
  }
}
