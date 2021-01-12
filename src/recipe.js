class Recipe {
  constructor(recipe) {
    this.id = recipe.id
    this.name = recipe.name
    this.image = recipe.image
    this.tags = recipe.tags
    this.ingredients = recipe.ingredients
    this.instructions = recipe.instructions
  }

  updateIngredientsInfo(ingredientList) {
      this.ingredients.forEach(ingredient => {
        const foundItem = ingredientList.find(item => item.id === ingredient.id)
        ingredient.name = foundItem.name
        ingredient.cost = foundItem.estimatedCostInCents
      })
  }

  formatName() {
    if (this.name.length > 40) {
      this.name = this.name.substring(0, 40) + "..."
    }
    
    return this.name
  }
  
}

module.exports = Recipe
