import React, {Component} from 'react';

class PlipItem extends Component {

    render() {
        const plip = this.props.plip;

        return (
            <div className="plip-item">
                <div className="plip-item-desc"><strong>{plip.author}</strong> on <i>{plip.date.toLocaleDateString()} {plip.date.toLocaleTimeString()}</i>:</div>
                <p className="plip-item-content">{plip.content}</p>
                <button className="button-secondary pure-button">Unplip</button>
            </div>
        );
    }
}

export default PlipItem;
