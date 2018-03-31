import React, { Component } from 'react';
import '../scss/style.scss';

import AddPlip from './components/AddPlip/AddPlip';
import PlipsList from './components/PlipList/PlipsList';
import PlipAuthorFilter from './components/PlipAuthorFilter/PlipAuthorFilter';
import PlipService from './services/PlipService';

class App extends Component {
  constructor() {
    super();

    this.state = {
      plips: [],
      plipsSortOrder: 'asc',
      activeAuthor: 'organicdog852' //default author
    };

    this.addPlipHandler = this.addPlipHandler.bind(this);
    this.filterPlips = this.filterPlips.bind(this);
    this.removePlipHandler = this.removePlipHandler.bind(this);
    this.resetFilterHandler = this.resetFilter.bind(this);
  }

  componentDidMount() {
    this.getAllPlips();
  }

  /* Manage data */
  getAllPlips = () => PlipService.getPlips().then(plips => this.setState({plips}));

  addPlipHandler(plip) {
    PlipService.addPlip(plip).then(() => this.getAllPlips());
  }
  removePlipHandler(plipId) {
    PlipService.removePlip(plipId).then(() => this.getAllPlips());
  }

  /* Filtering Data */
  filterPlips(username) {
    this.setState({
      plips:  PlipService.filterPlipsByAuthor(username)
    });
  }

  resetFilter() {
    return this.getAllPlips();
  }


  render() {
    return (
      <div className="app">
        <header className="app-header">
          <div className="pure-g">
            <div className="pure-u-1-2">
              <button className="app-title" onClick={this.resetFilterHandler}>PliP-PloP</button>
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

            <PlipsList
              plips={this.state.plips}
              onReset={this.resetFilter}
              sortOrder={this.state.plipsSortOrder}
              unplipHandler={this.removePlipHandler}
            />

          </div>
          <div className="pure-u-1-3">

            <PlipAuthorFilter
              onFilter={this.filterPlips}
            />

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
