import React, {Component} from 'react';
import {AUTHORS_LIST_MOCK} from '../../mocks/authorsMock';
import AuthorItem from '../AuthorItem/AuthorItem';

class PlipAuthorFilter extends Component {
    constructor(props) {
        super(props);
        this.authors = AUTHORS_LIST_MOCK;
        this.authorsList = null;
    }

    componentWillMount() {
        this.authorsList = this.authors.map(author => (<AuthorItem key={author.id} author={author} {...this.props}/>));
    }

    render() {
        return (
            <div className="plip-author-filter">
                <h2 className="title">Топчик 10</h2>
                {this.authorsList}
            </div>
        );
    }
}

export default PlipAuthorFilter;
