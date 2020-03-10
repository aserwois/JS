import React, { Component } from 'react';
import PropTest from './propTest'
import PropTypes from 'prop-types'
import './App.css';
import FunctionProps from './functionprops'

const InstructorItem = props => {
    return (
      <li>
        <h3>{props.name}</h3>
        <h4>Hobbies: {props.hobbies.join(" ,")}</h4>
      </li>
    );
  }

InstructorItem.propTypes = {
  name: PropTypes.string,
  hobbies: PropTypes.arrayOf(PropTypes.string)
}

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

        const dupa = this.state.instructors
        // instructors[randInst] = Object.assign({}, instructors[randInst])
        // instructors[randInst].hobbies = instructors[randInst].hobbies.slice();
        dupa[randInst].hobbies.splice(hobbyIndex, 1, "dupeczka")
        this.setState({dupa});
      }, 5000)
  }

  render () {
    const instructors = this.state.instructors.map((instr, i) => (
      <InstructorItem key={i}
        name={instr.name}
        hobbies={instr.hobbies}
      />
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
