import React, {Component} from 'react';
import PlipItem from '../PlipItem/PlipItem';
import NoResults from '../NoResults/NoResults';
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
                return (this.props.sortOrder === 'desc') ? (b.content > a.content) : (a.content > b.content);
            });

            // map plips data to component
            this.output = this.plipItems.map((plip) => {
                return <PlipItem className="plips-list-item"
                                 key={plip.id}
                                 plip={plip}
                                 author={this.findAuthor(plip.author)}/>;
            });
            if (!this.output.length) {
                this.output = <NoResults onShowAll={this.props.onReset}/>;
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
