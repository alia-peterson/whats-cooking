const fetchApi = {

  getUserData() {
    return fetch('http://localhost:3001/api/v1/users')
      .then(response => response.json())
      .catch(error => console.log(error))
  },

  getRecipeData() {
    return fetch('http://localhost:3001/api/v1/recipes')
      .then(response => response.json())
      .catch(error => console.log(error))
  },

  getIngredientsData() {
    return fetch('http://localhost:3001/api/v1/ingredients')
      .then(response => response.json())
      .catch(error => console.log(error))
  },

  postUserInformation(updatedPantryItem) {
    const postFormat = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updatedPantryItem)
    }

    return fetch('http://localhost:3001/api/v1/users', postFormat)
      .then(response => response.json())
      .catch(error => console.log(error))
      // .catch(error => window.alert())
  }
}

export default fetchApi
