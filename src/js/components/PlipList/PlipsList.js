import React, {Component} from 'react';
import PlipItem from '../PlipItem/PlipItem';
import {AUTHORS_LIST_MOCK} from '../../mocks/authorsMock';

class PlipsList extends Component {

    constructor(props) {
        super(props);
        this.plipItems = this.props.plips;
        this.plipAuthors = AUTHORS_LIST_MOCK;
        this.output = null;
    }

    render() {
        if (this.props.plips) {
            // sorting functionality
            this.plipItems = this.props.plips.sort((a, b) => {
                return (this.props.sortOrder === 'desc')? (b.content > a.content) : (a.content > b.content);
            });

            // map plips - all or for specific author
            this.output = this.plipItems.map((plip) => {
                if (!!this.props.activeAuthor) {
                    return (this.props.activeAuthor === plip.author) ? <PlipItem key={plip.id} className="plips-list-item" plip={plip} author={this.findAuthor(plip.author)}/> : null;
                } else {
                    return <PlipItem key={plip.id} className="plips-list-item" plip={plip} author={this.findAuthor(plip.author)}/>;
                }
            });

            if (!this.output.length) {
                this.output = '<p>Nothing to show</p>';
            }
        }

        return (
            <div className="plips-list">
                {this.output}
            </div>
        );
    }

    /* UTILS */
    findAuthor(userName) {
        return this.plipAuthors.find(author => (author.username === userName));
    }
}

export default PlipsList;
