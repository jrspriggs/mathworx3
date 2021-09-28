import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import AdditionForm from './additionForm.jsx';
import AdditionGame from './additionGame.jsx';

class App extends React.Component {	

  constructor(props) {
    super(props);

    this.state = {
      addTerm: 0 
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(addTerm) {
    const additionTerm = addTerm;

    this.setState({ addTerm: additionTerm });
    console.log(this.state);
  }

  render() {
    const {addTerm} = this.state;
    return (
      <div className="App">
      <header className="App-header">
        MathWorx
      </header>
        Addition
        <AdditionForm onSubmit={this.onFormSubmit} />
        <AdditionGame additionTerm={addTerm} />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
