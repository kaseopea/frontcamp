import React from 'react';
import PropTypes from 'prop-types';
import authorPropType from '../../propTypes/authorPropType';

const AuthorItem = props => (
  <div className="author-item">
    <span className="author-item-title">{props.author.firstName} {props.author.lastName}</span>
    <button
      className="button-secondary pure-button author-item-show-plips"
      onClick={() => props.onFilter(props.author.username)}
    >
      Show plips
    </button>
  </div>
);

AuthorItem.propTypes = {
  author: PropTypes.shape(authorPropType).isRequired,
  onFilter: PropTypes.func.isRequired
};

export default AuthorItem;
