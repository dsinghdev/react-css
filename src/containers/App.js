import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import './App.css';

class App extends Component {
  state = {
    persons : [
      { id:'123', name: 'Max', age: 28},
      { id:'124',name: 'Manu', age: 29},
      { id:'125',name: 'Stephanie', age: 26}
    ],
    otherState:'Some other value',
    showPersons:false
  };

  switchNameHandler = () => {
    this.setState(
      {
        persons : [
          { name: 'Maximillion', age: 28},
          { name: 'Manu', age: 29},
          { name: 'Stephanie', age: 27}
        ]
      }
    )
  }

  changeNameHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
     })

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;


    this.setState(
      {
        persons: persons
      }
    )
  }

  togglePersonsHandler = () => {
    const doesshow = this.state.showPersons;
    this.setState({showPersons: !doesshow});
  }

  deletePersosnHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

 render () {
   

   let persons = null;

   if (this.state.showPersons) {
     persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersosnHandler}
          changed={this.changeNameHandler} />;
    }

  
    return (
      <div className="App">
        <Cockpit showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonsHandler}/>
       {persons}
      </div>
    );
  }
}

export default App;
