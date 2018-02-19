import React, {Component} from 'react';
import PlipItem from '../PlipItem/PlipItem';
import {AUTHORS_LIST_MOCK} from '../../mocks/authorsMock';

class PlipsList extends Component {

    constructor(props) {
        super(props);
        this.plipItems = [];
        this.plipAuthors = AUTHORS_LIST_MOCK;
    }

    render() {
        if (this.props.plips) {
            //sorting functionality
            this.plipItems = this.props.plips.sort((a, b) => {
                return (this.props.sortOrder === 'desc')? (b.content > a.content) : (a.content > b.content);
            });

            this.plipItems = this.plipItems.map((plip) => {
                return <PlipItem key={plip.id} className="plips-list-item" plip={plip} author={this.findAuthor(plip.author)}/>;
            });
        }

        return (
            <div className="plips-list">
                {this.plipItems}
            </div>
        );
    }

    /* UTILS */
    findAuthor(userName) {
        return this.plipAuthors.find(author => (author.username === userName));
    }
}

export default PlipsList;
