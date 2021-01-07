// import './scripts'

const main = document.querySelector(".container")
const bannerText = document.querySelector(".banner-image")
const recipeTagList = document.querySelector(".tag-list")
const fullRecipeInfo = document.querySelector(".recipe-instructions")
const pantryList = document.querySelector(".pantry-list")
const cardTemplate = document.querySelector('#template--card')

let domUpdates = {
  addWelcomeMessage(firstName) {
    let welcomeMsg = `
      <div class="welcome-msg">
        <h1>Welcome ${firstName}!</h1>
      </div>`
    bannerText.insertAdjacentHTML("afterbegin", welcomeMsg)
  },

  addCardToDom(recipeInfo, shortRecipeName) {
    const newRecipeCard = cardTemplate.content.cloneNode(true)
    newRecipeCard.querySelector('article.recipe--card').id = recipeInfo.id
    newRecipeCard.querySelector('h3.recipe--title').innerText = shortRecipeName
    newRecipeCard.querySelector('img.recipe--photo').src = recipeInfo.image
    newRecipeCard.querySelector('img.recipe--photo').alt = recipeInfo.name
    newRecipeCard.querySelector('img.recipe--photo').title = `${recipeInfo.name} recipe`
    newRecipeCard.querySelector('h4.recipe--tags').innerText = recipeInfo.tags[0]

    main.appendChild(newRecipeCard)
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
    let instructionsList = ''
    instructions.forEach(item => {
      instructionsList += `<li>${item}</li>`
    })
    return instructionsList
  },

  capitalize(words) {
    return words.split(" ").map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }
}


export default domUpdates
