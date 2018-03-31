import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import authorPropType from '../../propTypes/authorPropType';
import plipPropType from '../../propTypes/plipPropType';


const PlipItem = (props) => {
  const { plip, author } = props;
  return (
    <div className="plip-item">
      <div className="plip-item-avatar">
        <img
          className="photo"
          alt="Avatar"
          src={author.photo}
        />
        <div className="title">{author.firstName} {author.lastName}</div>
      </div>
      <div className="plip-item-content">
        <p className="text"><Link to={`/plip/${plip._id}`}>&laquo;{plip.content}&raquo;</Link></p>
        <p className="date">{new Date(plip.date).toLocaleTimeString()}</p>
        {(props.unplipHandler) ? (
          <button className="button-secondary pure-button" onClick={() => props.unplipHandler(plip._id)}>
            Unplip
          </button>
        ) : null }
      </div>
    </div>
  );
};
PlipItem.propTypes = {
  plip: PropTypes.shape(plipPropType).isRequired,
  unplipHandler: PropTypes.func,
  author: PropTypes.shape(authorPropType).isRequired,
};
PlipItem.defultTypes = {
  unplipHandler: () => null,
};
export default PlipItem;
