import React, {Component} from 'react';

import AddPlip from './components/AddPlip/AddPlip';
import PlipsList from './components/PlipList/PlipsList';
import PlipAuthorFilter from './components/PlipAuthorFilter/PlipAuthorFilter';

import PlipService from './services/PlipService';

// import AuthorService from './services/AuthorService';

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
        this.setState({
            plips: PlipService.getPlips()
        });
    }

    addPlipHandler(plip) {
        PlipService.addPlip(plip);
        this.setState({
            plips: PlipService.getPlips()
        });
    }

    filterPlips(username) {
        const authorPlips = PlipService.filterPlipsByAuthor(username);
        this.setState({
            plips: authorPlips,
            activeAuthor: username
        });
    }

    resetFilter() {
        this.setState({
            plips: PlipService.getPlips()
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
