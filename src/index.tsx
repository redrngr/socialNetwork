import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import App from './components/App';
import './assets/bootstrap.min.css';

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'));