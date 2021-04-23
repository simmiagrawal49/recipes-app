import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTubeEmbed from "./YouTubeEmbed";
import './Recipe.css'
class Recipe extends Component {
  render() {
    const ingredients = this.props.ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>);
    const steps = this.props.steps.map((step, i) => <li key={i}>{step}</li>);
     console.log(this.props.embedId);
     console.log(this.props.title);
    return (
        
      <div className="Recipe">
        <h2 className="Recipe__title">{this.props.title}</h2>
        <h3 className="Recipe__sub-title">Ingredients</h3>
        <ul className="Recipe__ingredients">
          {ingredients}
        </ul>
        <h3 className="Recipe__sub-title">Steps</h3>
        <ol className="Recipe__steps">
          {steps}
        </ol>
        <h3 className="Recipe__sub-title">How To Make</h3>
         <YouTubeEmbed embedId={this.props.embedId} />
      </div>
    );
  }
}

Recipe.propTypes = {
  ingredients: PropTypes.array.isRequired,
  steps: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Recipe;
