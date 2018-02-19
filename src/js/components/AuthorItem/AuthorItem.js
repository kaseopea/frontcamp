import React, {Component} from 'react';

class AuthorItem extends Component {
    constructor(props) {
        super(props);
        this.showPlipsHandler = this.showPlipsHandler.bind(this);
    }

    showPlipsHandler() {
        this.props.onClick(this.props.author);
    };

    render() {
        const author = this.props.author;

        return (
            <div className="author-item">
                <span className="author-item-title">{author.firstName} {author.lastName}</span>
                <button className="button-secondary pure-button author-item-show-plips" onClick={this.showPlipsHandler}>Show plips</button>
            </div>
        );
    }
}

export default AuthorItem;
