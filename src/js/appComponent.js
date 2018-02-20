import React, {Component} from 'react';
import {PLIPMOCK} from './mocks/plipsMock';

import AddPlip from './components/AddPlip/AddPlip';
import PlipsList from './components/PlipList/PlipsList';
import PlipAuthorFilter from './components/PlipAuthorFilter/PlipAuthorFilter';


class App extends Component {
    constructor() {
        super();

        this.state = {
            plips: [],
            plipsSortOrder: 'asc',
            activeAuthor: 'organicdog852' //default author
        };

        this.addPlipHandler = this.addPlipHandler.bind(this);
        this.filterPlips = this.filterPlips.bind(this);
        this.resetFilter = this.resetFilter.bind(this);

    }

    componentWillMount() {
        // Add mock data
        this.setState({
            plips: PLIPMOCK
        });
    }

    addPlipHandler(plip) {
        const plipsList = this.state.plips;
        plipsList.push(plip);
        this.setState({
            plips: plipsList
        });
    }

    filterPlips(username) {
        const filteredPlips = PLIPMOCK.filter(plip => {
            return plip.author === username;
        });

        this.setState({
            plips: filteredPlips,
            activeAuthor: username
        });
    }

    resetFilter() {
        this.setState({
            plips: PLIPMOCK
        });
    }

    render() {
        return (
            <div className="app">
                <header className="app-header">
                    <div className="pure-g">
                        <div className="pure-u-1-2">
                            <h1 className="app-title" onClick={this.resetFilter}>PliP-PloP</h1>
                        </div>
                        <div className="pure-u-1-2">
                            <AddPlip author={this.state.activeAuthor} onAddPlipSubmit={this.addPlipHandler}/>
                        </div>
                    </div>
                </header>

                <div className="pure-g">
                    <div className="pure-u-2-3">
                        <PlipsList plips={this.state.plips}
                                   onReset={this.resetFilter}
                                   sortOrder={this.state.plipsSortOrder}/>
                    </div>
                    <div className="pure-u-1-3">
                        <PlipAuthorFilter onFilter={this.filterPlips}/>
                    </div>
                </div>

                <footer className="app-footer">
                    Plip-Plop&copy; 2018. No rights, nothing to reserve.
                </footer>
            </div>
        );
    }
}

export default App;
