import React, { Component } from 'react';
import AuthorItem from '../AuthorItem/AuthorItem';
import AuthorService from '../../services/AuthorService';

class PlipAuthorFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: null
    };
  }

  componentDidMount() {
    this.setState({
      authors: AuthorService.getAuthors()
    });
  }

  render() {
    if (this.state.authors) {
      return (
        <div className="plip-author-filter">
          <h2 className="title">Топчик 10</h2>
          {this.state.authors.map(author => (
            <AuthorItem key={author.id} author={author} {...this.props} />
          ))}
        </div>
      );
    } else {
      return (
        <div>
          Loading authors...
        </div>
      );
    }

  }
}

export default PlipAuthorFilter;
