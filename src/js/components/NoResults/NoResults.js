import React, {Component} from 'react';

class NoResults extends Component {
    constructor(props) {
        super(props);
        this.showAllHandler = this.showAllHandler.bind(this);
    }

    showAllHandler() {
        this.props.onShowAll();
    };

    render() {
        return (
            <div className="no-results">
                <h2 className="no-results-title">Sorry, no results for this author</h2>
                <button className="button-secondary pure-button no-results-btn" onClick={this.showAllHandler}>Show all plips</button>
            </div>
        );
    }
}

export default NoResults;
