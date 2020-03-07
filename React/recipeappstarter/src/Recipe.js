import React, { Component } from 'react';
import './Recipe.css'

class Recipe extends Component {
    render() {
        const {title, img, instructions} = this.props;
        const ingr = this.props.ingr.map((val, i) => 
            (<li key={i}>{val}</li>)
        );
        return (
            <div className="recipe-card">
                <div className="recipe-card-img">
                    <img src={img} alt={title} />
                </div>
                <div className="recipe-card-content">
                    <h3 className="recipe-title">
                        Recipe {title}
                    </h3>
                    <h4>Ingredients:</h4>
                    <ul>
                        {ingr}
                    </ul>
                    <h4>Instructions:</h4>
                    <p>{instructions}</p>
                </div>
            </div>
        )
    }
}

export default Recipe;

// static defaultProps = {  // static inside a class and Recipe.defaultProps outside the class
//     array = [];
// }

// {this.props.recipe.map((r, i) => (
//     <RecipeApp key={i} title={r.title}
//     ingr={r.ingr} img={r.img}
//     instructions={r.instructions}
// ))}

// <Recipe key={i} {...r}

// static defaultProp = {
//     recipe: [{
//         title: "Spaghetti",
//         ingr: ["flour","salt"],
//         instructions: "Mix ingredients",
//         img: "3.jpg"
//     }]
// }