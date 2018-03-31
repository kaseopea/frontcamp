import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PlipItem from '../PlipItem/PlipItem';
import NoResults from '../NoResults/NoResults';
import PlipService from '../../services/PlipService';
import AuthorService from '../../services/AuthorService';
import plipPropType from '../../propTypes/plipPropType';

class PlipsList extends Component {
  static propTypes = {
    plips: PropTypes.arrayOf(PropTypes.shape(plipPropType)),
    onReset: PropTypes.func.isRequired,
    sortOrder: PropTypes.string,
    unplipHandler: PropTypes.func.isRequired,
  };

  static defaultProps = {
    plips: [],
    sortOrder: 'asc'
  };

  getData(items) {
    // sorting functionality
    const plipItems = PlipService.sortPlips(items, this.props.sortOrder);

    // map plips data to component
    return plipItems.map(plip => (
      <PlipItem
        className="plips-list-item"
        key={plip._id}
        plip={plip}
        unplipHandler={this.props.unplipHandler}
        author={AuthorService.getAuthor(plip.author)}
      />
    ));
  }

  render() {
    let output = this.getData(this.props.plips);
    if (!output.length) {
      output = (
        <NoResults
          onShowAll={this.props.onReset}
        />
      );
    }
    return (
      <div className="plips-list">
        {output}
      </div>
    );
  }
}

export default PlipsList;
