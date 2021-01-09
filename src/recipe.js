class Recipe {
  constructor(recipe) {
    this.id = recipe.id
    this.name = recipe.name
    this.image = recipe.image
    this.tags = recipe.tags
    this.ingredients = recipe.ingredients
    this.instructions = recipe.instructions
  }

  calculateIngredientCost() { // need to create test for this
    return this.ingredients.map(ingredient => {
      return (ingredient.cost * ingredient.quantity.amount) / 100
    })
  }
}

module.exports = Recipe;
