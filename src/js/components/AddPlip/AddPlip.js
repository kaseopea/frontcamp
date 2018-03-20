import React, {Component} from 'react';
import uuid from 'uuid';

class AddPlip extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    submitHandler(event) {
        const {author} = this.props;
        // todo: remove author from props
        if (!author.length) {
            console.error('Not enough data specified to add plip!');
            return;
        }

        this.setState({
            id: uuid.v4(),
            date: new Date(Date.now()),
            content: this.state.content,
            author
        }, () => this.props.onAddPlipSubmit(this.state));

        event.preventDefault();
    }

    onInputChange(event) {
        this.setState({
            content: event.target.value
        });
    }

    render() {
        return (
            <div className="add-plip">
                <form className="pure-form" onSubmit={(e) => this.submitHandler(e)}>

                    <div>
                        <input type="text" ref="plip" onChange={(e) => this.onInputChange(e)}
                               placeholder="Plip text"/>
                        <input type="submit" className="pure-button pure-button-primary add-plip-submit"
                               value="Plip now!"/>
                    </div>

                </form>
            </div>
        );
    }
}

export default AddPlip;
