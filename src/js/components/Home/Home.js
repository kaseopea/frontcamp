import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlipsList from '../PlipList/PlipsList';
import { loadPlips, removePlip } from "../../redux/actions/PlipsActions";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plipsSortOrder: 'asc'
    };
  }

  componentDidMount() {
    this.props.getAllPlips();
  }

  resetFilter() {
    return this.props.getAllPlips();
  }

  render() {
    const { plips } = this.props;
    if (plips) {
      return (
        <PlipsList
          plips={plips}
          sortOrder={this.state.plipsSortOrder}
          unplipHandler={id => this.props.removePlip(id)}
        />
      );
    } else {
      return (
        <div>Loading data....</div>
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

export default connect(mapStoreToProps, mapDispatchToProps)(Home);
