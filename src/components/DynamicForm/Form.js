import React, { Component } from 'react';

import './Form.css';
import Input from './Input/Input';
import Button from '../UI/Button/Button';

class Form extends Component {
  state = {
    data: null
  }

  componentWillMount() {
    this.setState({data: this.props.inputs});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit();
  }

  onInputChange = (event, index) => {
    const data = this.state.data;
    data[index].data = event.target.value;
    this.setState({data: data});
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
          <h2>{this.props.heading}</h2>
          {this.state.data.map((value, index) => {
            return (
              <Input key={index} label={value.heading} value={value.data} onChange={(event) => this.onInputChange(event, index)}/>
            );
          })}
          <Button clicked={this.props.onSumbit}>{this.props.buttonLabel}</Button>
      </form>
    );
  }
}

export default Form;