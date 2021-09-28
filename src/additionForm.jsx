import React, { Component } from 'react';

class AdditionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      additionTerm: 0,
    };
    this.inputUpdated = this.inputUpdated.bind(this);
    this.submitAdditionterm = this.submitAdditionterm.bind(this);
  }
  inputUpdated(e) {
    const { value } = e.target;

    this.setState({ additionTerm: value });
  }  
  
  submitAdditionterm(e) {
    e.preventDefault();
    const { onSubmit } = this.props;

    onSubmit(this.state.additionTerm);
  }
  
  render() {
    return (
      <div className="add-form">
        <form>
          <label htmlFor="addTerm">Plus What?</label>
          <input
            className="form-control"
            type="input"
            name="addTerm"
            value={this.state.additionTerm}
            onChange={this.inputUpdated}
            pattern="[0-9]*"/>
          <button onClick={this.submitAdditionterm} className='btn btn-success'>Let's Play</button>
        </form>
      </div>
    );
  }
}

AdditionForm.defaultProps = {
  onSubmit: () => {}
};

export default AdditionForm;