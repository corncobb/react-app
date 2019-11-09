import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: 'adsfda', name: 'Max', age: 28 },
      { id: 'ffeads', name: 'Manu', age: 29 },
      { id: 'efewe', name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex] // Spread opperator
    }

    // Using Object.assign is another option but spread is more modern
    // const person = Object.assign({}, this.state.perosns[personIndex]); 

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })

  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      curson: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => { // this acts as a loop
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />

          })}
        </div>
      );

    }
    return (
      <div className="App">
        <h1>Hi, I am a React App!!</h1>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
      {persons}
      </div>
    )
  }

}




export default App;
