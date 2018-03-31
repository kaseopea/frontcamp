import React, { Component } from 'react';
import PlipsList from '../PlipList/PlipsList';
import PlipService from '../../services/PlipService';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      plips: null
    }
    this.removePlipHandler = this.removePlipHandler.bind(this);
  }

  componentDidMount() {
    this.getAllPlips();
  }

  /* Manage data */
  getAllPlips = () => PlipService.getPlips().then(plips => this.setState({plips}));

  removePlipHandler(plipId) {
    PlipService.removePlip(plipId).then(() => this.getAllPlips());
  }

  resetFilter() {
    return this.getAllPlips();
  }

  render() {
    if (this.state.plips) {
      return (
        <PlipsList
          plips={this.state.plips}
          sortOrder={this.state.plipsSortOrder}
          unplipHandler={this.removePlipHandler}
        />
      );
    } else {
      return (
        <div>Loading data....</div>
      );
    }
  }
}

export default Home;
