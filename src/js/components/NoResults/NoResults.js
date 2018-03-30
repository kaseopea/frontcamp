import React from 'react';
import PropTypes from 'prop-types';

const NoResults = (props) => (
  <div className="no-results">
    <h2 className="no-results-title">Sorry, no results for this author</h2>
    <button className="button-secondary pure-button no-results-btn" onClick={() => props.onShowAll()}>
      Show all plips
    </button>
  </div>
);

NoResults.propTypes = {
  onShowAll: PropTypes.func.isRequired
};

export default NoResults;
