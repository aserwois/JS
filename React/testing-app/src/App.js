import React, { Component } from 'react';
import PropTest from './propTest'
import './App.css';
import FunctionProps from './functionprops'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: "Tim",
          hobbies: ['sailing','react']
        }, {
          name: "Matt",
          hobbies: ['math','d3']
        }, {
          name: "Colt",
          hobbies: ['css','hiking']
        }, {
          name: "Elie",
          hobbies: ['music','es2015']
        }
      ]
    }

    setTimeout(() => {
        const randInst = Math.floor(
          Math.random() * 
          this.state.instructors.length
          );

        const hobbyIndex = Math.floor(
          Math.random() * 
          this.state.instructors[randInst].hobbies.length
          );

        const dupa = this.state.instructors.map((inst, i) => (
          i === randInst ? {

          } : inst
    ))

        // instructors[randInst] = Object.assign({}, instructors[randInst])
        // instructors[randInst].hobbies = instructors[randInst].hobbies.slice();
        // dupa[randInst].hobbies.splice(hobbyIndex, 1, "dupeczka")
        // this.setState({dupa});
      }, 5000)
  }
  render () {
    const instructors = this.state.instructors.map((instr, i) => (
      <li key={i}>
        <h3>{instr.name}</h3>
        <h4>Hobbies: {instr.hobbies.join(" ,")}</h4>
      </li>
    ))
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
