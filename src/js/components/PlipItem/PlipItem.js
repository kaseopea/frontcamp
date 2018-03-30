import React from 'react';
import PropTypes from 'prop-types';
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
        <p className="text">&laquo;{plip.content}&raquo;</p>
        <p className="date">{plip.date.toLocaleTimeString()}</p>
        <button className="button-secondary pure-button" onClick={() => props.unplipHandler(plip.id)}>Unplip
        </button>
      </div>
    </div>
  );
};
PlipItem.propTypes = {
  plip: PropTypes.shape(plipPropType).isRequired,
  unplipHandler: PropTypes.func.isRequired,
  author: PropTypes.shape(authorPropType).isRequired,
};
export default PlipItem;
