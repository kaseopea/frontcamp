import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../scss/style.scss';

import AddPlip from './components/AddPlip/AddPlip';
import PlipAuthorFilter from './components/PlipAuthorFilter/PlipAuthorFilter';
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux'
import { addPlip } from "./redux/actions/PlipsActions";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plipsSortOrder: 'asc',
      activeAuthor: 'organicdog852'
    };
  }

  render() {
    const {route} = this.props;
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
                  onAddPlip={plip => this.props.addPlip(plip)}
                />
              </div>
            </div>
          </header>

          <div className="pure-g">
            <div className="pure-u-2-3">
              { renderRoutes(route.routes) }
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

function mapStoreToProps(store) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    addPlip(plip) {
      dispatch(addPlip(plip));
    },
  };
}

export default connect(mapStoreToProps, mapDispatchToProps)(App);
