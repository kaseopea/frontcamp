import React, { Component } from 'react';
import { connect } from 'react-redux'
import AuthorService from '../../services/AuthorService';
import PlipsList from '../PlipList/PlipsList';
import { loadPlips, removePlip } from "../../redux/actions/PlipsActions";

class AuthorView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plipsSortOrder: 'asc'
    };
  }

  componentDidMount() {
    this.props.getAllPlips();
  }

  render() {
    const { plips = [], match } = this.props;
    const authorPlips = AuthorService.filterByUsername(plips, match.params.username);
    if (authorPlips) {
      return (
        <PlipsList
          plips={authorPlips}
          sortOrder={this.state.plipsSortOrder}
          unplipHandler={id => this.props.removePlip(id)}
        />
      );
    } else {
      return (
        <div>Loading author data....</div>
      );
    }
  }
}

function mapStoreToProps(store) {
  return {
    plips: store.plips.list
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllPlips() {
      dispatch(loadPlips());
    },
    removePlip(id) {
      dispatch(removePlip(id));
    },
  };
}

export default connect(mapStoreToProps, mapDispatchToProps)(AuthorView);
