const fetchApi = {

  getUserData() {
    return fetch('http://localhost:3001/api/v1/users')
      .then(response => response.json())
  },

  getRecipeData() {
    return fetch('http://localhost:3001/api/v1/recipes')
    .then(response => response.json())
  },

  getIngredientsData() {
    return fetch('http://localhost:3001/api/v1/ingredients')
      .then(response => response.json())
  }

}

export default fetchApi
