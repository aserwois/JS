import React, { Component } from 'react';
import Recipe from './Recipe.js'
import PropTypes from 'prop-types';
import './RecipeList.css'

class RecipeList extends Component {
    static defaultProps = {
        recipes: [
          {
            title: "Spaghetti",
            instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
            ingr: ["pasta", "8 cups water", "1 box spaghetti"],
            img: "3.jpg"
          },
          {
            title: "Milkshake",
            instructions: "Combine ice cream and milk.  Blend until creamy",
            ingr: ["2 Scoops Ice cream", "8 ounces milk"],
            img: "3.jpg"
          },
          {
            title: "Avocado Toast",
            instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
            ingr: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
            img: "3.jpg"
          }
        ]
      }

      static propTypes = {
          recipes: PropTypes.arrayOf(PropTypes.object)
      }
    render() {
        const recipes = this.props.recipes.map((r, i) => (
           <Recipe key={i} {...r} />
        ))
        return (
            <div className="recipe-list">
                    {recipes}
            </div>
        )
    }
}

export default RecipeList;