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
            plipsSortOrder: 'desc'
        }

        this.addPlipHandler = this.addPlipHandler.bind(this);

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

    render() {
        return (
            <div className="app">
                <header className="app-header">
                    <h1 className="app-title">PliP-PloP</h1>
                </header>

                <AddPlip onAddPlipSubmit={this.addPlipHandler}/>

                <div className="pure-g">
                    <div className="pure-u-2-3">
                        <PlipsList plips={this.state.plips} sortOrder={this.state.plipsSortOrder}/>
                    </div>
                    <div className="pure-u-1-3">
                        <PlipAuthorFilter/>
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
