import { createStore } from 'redux';

const initialState = {
  name: '',
  category: '',
  authorFirst: '',
  authorLast: '',
  ingredients: [],
  instructions: [],
  recipes: [],
};

//action types
export const UPDATING_NAME = 'UPDATING_NAME';
export const UPDATING_CATEGORY = 'UPDATING_CATEGORY';
export const UPDATING_AUTHOR_FIRST = 'UPDATING_AUTHOR_FIRST';
export const UPDATING_AUTHOR_LAST = 'UPDATING_AUTHOR_LAST';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INSTRUCTION = 'ADD_INSTRUCTION';
export const ADD_RECIPE = 'ADD_RECIPE';

//setting up a basic reducer
function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATING_NAME:
      return { ...state, name: payload };
    case UPDATING_CATEGORY:
      return { ...state, category: payload };
    case UPDATING_AUTHOR_FIRST:
      return { ...state, authorFirst: payload };
    case UPDATING_AUTHOR_LAST:
      return { ...state, authorLast: payload };
    case ADD_INGREDIENT:
      const newIngredients = [...state.ingredients, payload];
      return { ...state, ingredients: newIngredients };
    case ADD_INSTRUCTION:
      const newInstructions = [...state.instructions, payload];
      return { ...state, instructions: newInstructions };
    // case ADD_RECIPE:
    //   const newRecipe = [...state.recipes, payload];
    //   return { ...state, recipes: newRecipe };
    case ADD_RECIPE:
      const {
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions,
      } = state;
      const recipe = {
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions,
      };
      const newRecipes = [...state.recipes, recipe];
      return { ...state, recipes: newRecipes };

    default:
      return state;
  }
}

//create an dexport our store
export default createStore(reducer);
