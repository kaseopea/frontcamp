import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddPlip extends Component {
  static propTypes = {
    author: PropTypes.string,
    onAddPlip: PropTypes.func.isRequired
  };

  static defaultProps = {
    author: 'organicdog852'
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  onInputChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  submitHandler(event) {
    const { author } = this.props;

    this.setState({
      date: new Date(Date.now()),
      content: this.state.content,
      author
    }, () => this.props.onAddPlip(this.state));

    event.preventDefault();
  }

  render() {
    return (
      <div className="add-plip">
        <form className="pure-form" onSubmit={e => this.submitHandler(e)}>

          <div>
            <input
              type="text"
              ref="plip"
              onChange={e => this.onInputChange(e)}
              placeholder="Plip text"
            />
            <input
              type="submit"
              className="pure-button pure-button-primary add-plip-submit"
              value="Plip now!"
            />
          </div>

        </form>
      </div>
    );
  }
}

export default AddPlip;
