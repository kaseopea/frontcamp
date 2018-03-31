import React from 'react';

const NoResults = (props) => (
  <div className="no-results">
    <h2 className="no-results-title">Sorry, no results for this author</h2>
    <button className="button-secondary pure-button no-results-btn">
      Show all plips
    </button>
  </div>
);

NoResults.propTypes = {
};

export default NoResults;
