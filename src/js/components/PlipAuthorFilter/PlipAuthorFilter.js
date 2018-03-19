import React, {Component} from 'react';
import AuthorItem from '../AuthorItem/AuthorItem';
import AuthorService from '../../services/AuthorService';

class PlipAuthorFilter extends Component {
    constructor(props) {
        super(props);
        this.authors = AuthorService.getAuthors();
        this.authorsList = null;
    }

    componentDidMount() {
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
