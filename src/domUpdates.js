// import './scripts'

const main = document.querySelector(".container")
const bannerText = document.querySelector(".banner-image")
const recipeTagList = document.querySelector(".tag-list")
const fullRecipeInfo = document.querySelector(".recipe-instructions")
const pantryList = document.querySelector(".pantry-list")

let domUpdates = {
  addWelcomeMessage(firstName) {
    let welcomeMsg = `
      <div class="welcome-msg">
        <h1>Welcome ${firstName}!</h1>
      </div>`
    bannerText.insertAdjacentHTML("afterbegin", welcomeMsg)
  },

  addCardToDom(recipeInfo, shortRecipeName) {
    let cardHtml = `
      <div class="recipe-card" id=${recipeInfo.id}>
        <h3 maxlength="40">${shortRecipeName}</h3>
        <div class="card-photo-container">
          <img src=${recipeInfo.image} class="card-photo-preview" alt="${recipeInfo.name} recipe" title="${recipeInfo.name} recipe">
          <div class="text">
            <div>Click for Instructions</div>
          </div>
        </div>
        <h4>${recipeInfo.tags[0]}</h4>
        <img src="./images/apple-logo-outline.png" alt="unfilled apple icon" class="card-apple-icon">
      </div>`
    main.insertAdjacentHTML("beforeend", cardHtml)
  },

  addListTags(allTags) {
    allTags.forEach(tag => {
      let tagHtml = `<li><input type="checkbox" class="checked-tag" id="${tag}">
        <label for="${tag}">${this.capitalize(tag)}</label></li>`
      recipeTagList.insertAdjacentHTML("beforeend", tagHtml)
    })
  },

  generateRecipeTitle(recipe, ingredients) {
    let recipeTitle = `
      <button id="exit-recipe-btn">X</button>
      <h3 id="recipe-title">${recipe.name}</h3>
      <h4>Ingredients</h4>
      <p>${ingredients}</p>`
    this.fullRecipeInfoDisplay("beforeend", recipeTitle);
  },

  fullRecipeInfoDisplay(location, element) {
    fullRecipeInfo.insertAdjacentHTML(location, element)
  },

  displayPantryInfo(pantry) {
    pantry.forEach(ingredient => {
      let ingredientHtml = `
        <li><input type="checkbox" class="pantry-checkbox" id="${ingredient.name}">
        <label for="${ingredient.name}">${ingredient.name}, ${ingredient.count}</label></li>
      `
      pantryList.insertAdjacentHTML("beforeend", ingredientHtml)
    })
  },

  createListElements(instructions) {
    instructions.forEach(item => {
      instructionsList += `<li>${item}</li>`
    })
  },

  capitalize(words) {
    return words.split(" ").map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }
}


export default domUpdates
