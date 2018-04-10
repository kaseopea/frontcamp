import React, { Component } from 'react';
import { connect } from 'react-redux'
import PlipItem from '../PlipItem/PlipItem';
import AuthorService from '../../services/AuthorService';
import { getPlipById } from "../../redux/actions/PlipsActions";

class PlipView extends Component {

  componentDidMount() {
    const { match, getPlipById } = this.props;
    getPlipById(match.params.plipId);
  }

  render() {
    const { plip } = this.props;
    if (plip) {
      const author = AuthorService.getAuthor(plip.author);
      return (
        <div>
          <PlipItem
            className="plips-list-item"
            key={plip._id}
            plip={plip}
            author={author}
          />
        </div>
      );
    } else {
      return (
        <div>Loading plip....</div>
      );
    }
  }
}

function mapStoreToProps(store) {
  return {
    plip: store.plips.current
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPlipById(id) {
      dispatch(getPlipById(id));
    }
  };
}

export default connect(mapStoreToProps, mapDispatchToProps)(PlipView);
