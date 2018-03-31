import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import PlipItem from '../PlipItem/PlipItem';
import PlipService from '../../services/PlipService';
import AuthorService from '../../services/AuthorService';

class PlipView extends Component {
  constructor({match}) {
    super();
    this.state = {
      plipId: match.params.plipId,
      plip: null
    };
  }

  componentDidMount() {
    PlipService.getPlipById(this.state.plipId).then(plip => this.setState({plip}));
  }

  render() {
    if (this.state.plip) {
      const {plip} = this.state;
      const author = AuthorService.getAuthor(plip.author);
      return (
        <div>
          {this.plipId}
          {this.state.plip ? (<PlipItem
            className="plips-list-item"
            key={plip._id}
            plip={plip}
            author={author}
          />) : null}
        </div>
      );
    } else {
      return (
        <div>Loading plip....</div>
      );
    }
  }
}

export default PlipView;
