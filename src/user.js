class User {
  constructor(user) {
    this.id = user.id
    this.name = user.name
    this.pantry = user.pantry
    this.favoriteRecipes = []
    this.cookedRecipes  = []
  }

  saveRecipe(recipe) {
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe)
    }
  }

  removeRecipe(recipe) {
    if (recipe) {
      let i = this.favoriteRecipes.indexOf(recipe)
      this.favoriteRecipes.splice(i, 1)
    }
  }

  filterRecipes(type) {
    return this.favoriteRecipes.filter(recipe => recipe.type.includes(type))
  }

  searchForRecipe(keyword) {
    return this.favoriteRecipes.filter(recipe => {
      return recipe.name.includes(keyword) ||
             recipe.ingredients.includes(keyword)
    })
  }

  addPantryIngredientNames(ingredientList) {
    this.pantry.forEach(pantryItem => {
      const foundItem = ingredientList.find(item => item.id === pantryItem.ingredient)
      pantryItem.name = foundItem.name
    })
  }

  alphabatizePantry() {
    return this.pantry.sort(function(a, b) {
      if (a.name > b.name) {
        return 1
  
      } else if (a.name < b.name) {
        return -1
      }
    })
  }

}

module.exports = User
