import uuid from 'uuid';
import React, {Component} from 'react';

class AddPlip extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newPlip: {}
        };
    }

    submitHandler(event) {
        const {author} = this.props;
        const plipContent = this.refs.plip.value;

        // todo: remove author from props

        if (!plipContent.length || !author.length) {
            console.error('Not enough data specified');
        } else {
            this.setState({
                newPlip: {
                    id: uuid.v4(),
                    date: new Date(Date.now()),
                    content: plipContent,
                    author
                }
            }, () => this.props.onAddPlipSubmit(this.state.newPlip));
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className="add-plip">
                <form className="pure-form" onSubmit={() => this.submitHandler}>

                    <div>
                        <input type="text" ref="plip" placeholder="Plip text"/>
                        <input type="submit" className="pure-button pure-button-primary add-plip-submit" value="Plip now!"/>
                    </div>

                </form>
            </div>
        );
    }
}

export default AddPlip;
