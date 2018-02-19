import React, {Component} from 'react';
import PlipItem from '../PlipItem/PlipItem';

class PlipsList extends Component {

    constructor(props) {
        super(props);
        this.plipItems = [];
    }

    render() {
        if (this.props.plips) {
            //sorting functionality
            console.log(this.props.sortOrder);
            this.plipItems = this.props.plips.sort((a, b) => {
                return (this.props.sortOrder === 'desc')? (b.content > a.content) : (a.content > b.content);
            });
            console.log(this.plipItems);
            this.plipItems = this.plipItems.map((plip) => {
                return <PlipItem key={plip.id} className="plips-list-item" plip={plip}/>;
            });
        }



        return (
            <div className="plips-list">
                {this.plipItems}
            </div>
        );
    }
}

export default PlipsList;
