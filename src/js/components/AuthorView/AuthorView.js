import React, { Component } from 'react';
import PlipService from '../../services/PlipService';
import AuthorService from '../../services/AuthorService';
import PlipsList from '../PlipList/PlipsList';

class AuthorView extends Component {
  constructor({match}) {
    super();
    this.state = {
      username: match.params.username,
      plips: null,
      plipsSortOrder: 'asc'
    };
  }

  componentDidMount() {
    PlipService.getPlips().then(plips => {
      const authorPlips = AuthorService.filterByUsername(plips, this.state.username);
      this.setState({
        plips: authorPlips
      });
    });
  }

  render() {
    if (this.state.plips) {
      return (
        <PlipsList
          plips={this.state.plips}
          sortOrder={this.state.plipsSortOrder}
        />
      );
    } else {
      return (
        <div>Loading author data....</div>
      );
    }
  }
}

export default AuthorView;
