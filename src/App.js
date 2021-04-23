import React, { Component } from 'react';

import Recipe from './components/Recipe/Recipe';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import Header from './Header';
import SocialLinks from './components/SocialLinks/SocialLinks';

class App extends Component {
  constructor(props) {
    super(props);
    this.selectNewRecipe = this.selectNewRecipe.bind(this);
    this.state = {
      recipes: [
        {
          title: 'Bagel',
          ingredients: [
            '1 Bagel',
            'Cream cheese'
          ],
          steps: [
            'Slice bagel in half',
            'Spread on cream cheese',
            'Enjoy!'
          ],
          id: 'bagel',
          embedId: 'OOE5mjaH5r8'
        },
        {
          title: 'Pizza',
          ingredients: [
            '1 Pizza Crust',
            '1 Jar of Pizza Sauce',
            '3 oz Part-Skim Mozerella Cheese'
          ],
          steps: [
            'Put sauce on crust',
            'Sprinkle mozarella cheese over sauce',
            'Bake at 300 degrees for 20 minutes'
          ],
          id: 'pizza',
          embedId: '3FcRkATCf-U'
        },
      ],
      selectedRecipe: null
    }
  }

  selectNewRecipe(recipeId) {
    if(recipeId) {
      this.setState({
        ...this.state,
        selectedRecipe: recipeId
      });
    }
  }
  
  render() {
    let recipeToSelect;
    if(this.state.selectedRecipe) { 
      const filteredRecipes = this.state.recipes.filter((recipe) => recipe.id === this.state.selectedRecipe);  
      if(filteredRecipes.length > 0) { 
        recipeToSelect = filteredRecipes[0];
      }
    }
    return (<div>
      <div><Header/></div>
      
      <div className="Appdiv">
        <aside className='sidebar'>
          <Navigation 
            recipes={this.state.recipes}
            activeRecipe={this.state.selectedRecipe}
            recipeToSelect={this.selectNewRecipe}
          />
        </aside>
        {
          recipeToSelect ? 
            <Recipe
            ingredients={recipeToSelect.ingredients}
            steps={recipeToSelect.steps}
            title={recipeToSelect.title}
            embedId={recipeToSelect.embedId}
            />
            :
            null
        }
      </div>
      <div className="div-footer-recipe"></div>
      </div>
    );
  }

  componentDidMount() {
    const recipeToShow = this.state.recipes[0].id || null;
    this.setState({
      ...this.state,
      selectedRecipe: recipeToShow
    });
  }
}

export default App;
