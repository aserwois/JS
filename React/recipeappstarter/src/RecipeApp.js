import React, { Component } from 'react';
import './RecipeApp.css';
import Navbar from './Navbar.js'
import RecipeList from './RecipeList.js'
import Recipe from './Recipe.js';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
         <Navbar />
         <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;
