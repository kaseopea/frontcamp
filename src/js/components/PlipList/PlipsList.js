import React, {Component} from 'react';
import PlipItem from '../PlipItem/PlipItem';
import NoResults from '../NoResults/NoResults';
import PlipService from '../../services/PlipService';
import AuthorService from '../../services/AuthorService';

class PlipsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let plipItems = this.props.plips || [];

        // sorting functionality
        plipItems = PlipService.sortPlips(plipItems, this.props.sortOrder);

        // map plips data to component
        let output = plipItems.map((plip) => {
            return <PlipItem className="plips-list-item"
                             key={plip.id}
                             plip={plip}
                             unplipHandler={this.props.unplipHandler}
                             author={AuthorService.getAuthor(plip.author)}/>;
        });
        if (!output.length) {
            output = <NoResults onShowAll={this.props.onReset}/>;
        }

        return (
            <div className="plips-list">
                {output}
            </div>
        );
    }
}

export default PlipsList;
