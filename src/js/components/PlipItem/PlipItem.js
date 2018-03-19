import React, {Component} from 'react';

class PlipItem extends Component {

    render() {
        const {plip, author} = this.props;
        return (
            <div className="plip-item">
                <div className="plip-item-avatar">
                    <img className="photo" src={author.photo}/>
                    <div className="title">{author.firstName} {author.lastName}</div>
                </div>
                <div className="plip-item-content">
                    <p className="text">&laquo;{plip.content}&raquo;</p>
                    <p className="date">{plip.date.toLocaleTimeString()}</p>
                    <button className="button-secondary pure-button" onClick={() => this.props.unplipHandler(plip.id)}>Unplip</button>
                </div>
            </div>
        );
    }
}

export default PlipItem;