import React, {Component} from 'react';
import PlipItem from '../PlipItem/PlipItem';
import NoResults from '../NoResults/NoResults';
import PlipService from '../../services/PlipService';
import AuthorService from '../../services/AuthorService';

class PlipsList extends Component {

    constructor(props) {
        super(props);
        this.plipItems = null;
        this.output = null;
    }


    render() {
        if (this.props.plips) {
            this.plipItems = this.props.plips;
            // sorting functionality
            this.plipItems = PlipService.sortPlips(this.plipItems, this.props.sortOrder);

            // map plips data to component
            this.output = this.plipItems.map((plip) => {
                return <PlipItem className="plips-list-item"
                                 key={plip.id}
                                 plip={plip}
                                 unplipHandler={this.props.unplipHandler}
                                 author={AuthorService.getAuthor(plip.author)}/>;
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
}

export default PlipsList;
