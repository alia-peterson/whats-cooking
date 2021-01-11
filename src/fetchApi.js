const fetchApi = {
  getRecipeData() {
    return fetch('http://localhost:3001/api/v1/recipes')
    .then(response => response.json())
    // .then(recipes => {
    //   recipes.forEach(recipe => {
    //     const newRecipe = new Recipe(recipe)
    //
    //     allRecipes.push(newRecipe)
    //   })
    // })
  },

}

export default fetchApi
