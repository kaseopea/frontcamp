import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import '../scss/style.scss';

import Home from './components/Home/Home';
import AddPlip from './components/AddPlip/AddPlip';

import PlipView from './components/PlipView/PlipView';
import AuthorView from './components/AuthorView/AuthorView';
import PlipAuthorFilter from './components/PlipAuthorFilter/PlipAuthorFilter';
import PlipService from './services/PlipService';
// import DummyReduxComponent from './redux/redux';

import { renderRoutes } from 'react-router-config';
import routes from './routes/routes';


class App extends Component {
  constructor() {
    super();

    this.state = {
      plips: [],
      plipsSortOrder: 'asc',
      activeAuthor: 'organicdog852' //default author
    };

    this.addPlipHandler = this.addPlipHandler.bind(this);
  }

  componentDidMount() {
  }

  addPlipHandler(plip) {
    PlipService.addPlip(plip).then(() => this.getAllPlips());
  }

  render() {
    return (
        <div className="app">
          <header className="app-header">
            <div className="pure-g">
              <div className="pure-u-1-2">
                <Link to="/" className="app-title">PliP-PloP</Link>
              </div>
              <div className="pure-u-1-2">
                <AddPlip
                  author={this.state.activeAuthor}
                  onAddPlip={this.addPlipHandler}
                />
              </div>
            </div>
          </header>

          <div className="pure-g">
            <div className="pure-u-2-3">
              <Switch>
                { renderRoutes(routes) }
            </Switch>
            </div>
            <div className="pure-u-1-3">
              <PlipAuthorFilter />
            </div>
          </div>

          <footer className="app-footer">
            Plip-Plop&copy; 2018. No rights, nothing to reserve.
          </footer>
        </div>
    );
  }
}

export default App;
