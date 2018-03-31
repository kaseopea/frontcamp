import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import authorPropType from '../../propTypes/authorPropType';

class AuthorItem extends Component {
  static propTypes = {
    author: PropTypes.shape(authorPropType).isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="author-item">
        <Link to={`/author/${this.props.author.username}`}>
          <span className="author-item-title">{this.props.author.firstName} {this.props.author.lastName}</span>
        </Link>
      </div>
    );
  }
}

export default AuthorItem;
