import React, { Component } from 'react';

class AdditionGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberCorrect: 0,
      baseNumber: 0,
      inputTerm:0,
      numberSentence: '',
      answerResponse: ''
    };
    
    this.submitAdditionAnswer = this.submitAdditionAnswer.bind(this);
    this.createNumberSentence = this.createNumberSentence.bind(this);
    this.getRandomBase = this.getRandomBase.bind(this);
   this.inputUpdated = this.inputUpdated.bind(this);
  }
  inputUpdated(e) {
    const { value } = e.target;

    this.setState({ inputTerm: value });
  }  
  
  createNumberSentence() {
    let baseNum = this.getRandomBase();
    let numSentence = baseNum.toString() + " + " + this.props.additionTerm.toString() + " = ? ";
    this.setState({baseNumber: baseNum, numberSentence: numSentence});
  }
  
  componenetDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }
  
  componentDidUpdate(prevProps) {
    if(prevProps.additionTerm !== this.props.additionTerm) {
      this.createNumberSentence();
    }
  }
  
  submitAdditionAnswer(e) {
    e.preventDefault();
    const baseNumber = parseInt(this.state.baseNumber);
    const addTerm = parseInt(this.props.additionTerm);
    const answer = parseInt(this.state.inputTerm);
    if(answer === (addTerm + baseNumber)) {
      this.setState({numberCorrect: this.state.numberCorrect+1, answerResponse: 'Correctomundo'});
      this.createNumberSentence();
    } else {
      this.setState({answerResponse: "Wrong answer dude."});
    }
  }
  
  getRandomBase() {
    return Math.floor(Math.random() * 11);
  }
  
  render() {
    return (
      <div className="add-game">
        <form>
          <label htmlFor="answer"> {this.state.numberSentence} </label>
          <br />
          <input
            className="form-control"
            type="input"
            value={this.state.inputTerm}
            onChange={this.inputUpdated}
            name="answer"
            pattern="[0-9]*"/>
          <button onClick={this.submitAdditionAnswer} className='btn btn-success'>Answer</button>
        </form>
        <br />
        <div>
          {this.state.answerResponse}<br />
          Number Correct: {this.state.numberCorrect}
        </div>
      </div>
    );
  }
}

export default AdditionGame;