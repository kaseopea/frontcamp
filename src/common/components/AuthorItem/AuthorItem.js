import React, {Component} from 'react';

class AuthorItem extends Component {

    render() {
        const {author} = this.props;
        return (
            <div className="author-item">
                <span className="author-item-title">{author.firstName} {author.lastName}</span>
                <button className="button-secondary pure-button author-item-show-plips" onClick={this.props.onFilter.bind(this,author.username)}>Show plips</button>
            </div>
        );
    }
}

export default AuthorItem;
