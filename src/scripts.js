// import users from './data/users-data';
import recipeData from  './data/recipe-data';
// import ingredientData from './data/ingredient-data';
import domUpdates from './domUpdates'

import './css/index.scss';

import User from './user';
import Recipe from './recipe';

const recipeContainer = document.querySelector('.recipe--container')
const showAllRecipesButton = document.querySelector('#button-show-all')
const savedRecipesButton = document.querySelector('#button-saved')
const myPantryButton = document.querySelector('#button-pantry')
const filterRecipesButton = document.querySelector('#button-filter')
const exitButton = document.querySelector('#button-exit')
const cookRecipeButton = document.querySelector('#button-cooked')
const fullRecipeInfo = document.querySelector('.recipe--instructions')
const searchForm = document.querySelector('#search')
const searchInput = document.querySelector('#search-input')
const modalOverlay = document.querySelector('.overlay')
const modalDateMessage = document.querySelector('#modal--message-date')
const modalPantryMessage = document.querySelector('.modal--message-pantry')
const allRecipes = []
let menuOpen = false
let currentUser

window.addEventListener("load", function() {
  retrieveRecipeData()
    .then(generateUser)
    .then(retrieveIngredientsData)
    .then(() => displayPantryInfo(currentUser))
    .then(createCards)
    .then(findTags)
})

searchForm.addEventListener("submit", pressEnterSearch)
searchInput.addEventListener('keyup', searchRecipes)
showAllRecipesButton.addEventListener("click", showAllRecipes)
savedRecipesButton.addEventListener("click", showSavedRecipes)
myPantryButton.addEventListener("click", togglePantryDisplay)
filterRecipesButton.addEventListener("click", findCheckedBoxes)
exitButton.addEventListener('click', exitRecipeInstructions)
cookRecipeButton.addEventListener('click', cookRecipe)

// FETCH API DATASETS
function retrieveRecipeData() {
  return fetch('http://localhost:3001/api/v1/recipes')
    .then(response => response.json())
    .then(recipes => {
      recipes.forEach(recipe => {
        const newRecipe = new Recipe(recipe)

        allRecipes.push(newRecipe)
      })
    })
}

function retrieveIngredientsData() {
  return fetch('http://localhost:3001/api/v1/ingredients')
    .then(response => response.json())
    .then(data => {
      addRecipeInformation(data)
      addPantryInformation(data)
    })
}

function addRecipeInformation(data) {
  allRecipes.forEach(recipe => {
    recipe.ingredients.forEach(ingredient => {
      const foundItem = data.find(item => item.id === ingredient.id)
      ingredient.name = foundItem.name
      ingredient.cost = foundItem.estimatedCostInCents
    })
  })
}

function addPantryInformation(data) {
  currentUser.pantry.forEach(pantryItem => {
    const foundItem = data.find(item => item.id === pantryItem.ingredient)
    pantryItem.name = foundItem.name
  })
}

function generateUser() {
  return fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
    .then(users => {
      currentUser = new User(users[Math.floor(Math.random() * users.length)])
      let firstName = currentUser.name.split(" ")[0]
      domUpdates.addWelcomeMessage(firstName)
    })
}

function updateUserPantry(recipeId) {
  const thisRecipe = allRecipes.find(recipe => recipe.id === Number(recipeId))
  completedPosts = thisRecipe.ingredients.forEach(item => {
    const updatedPantryItem = {
      userID: currentUser.id,
      ingredientID: item.id,
      ingredientModification: item.quantity.amount
    }

    const postFormat = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updatedPantryItem)
    }

    return fetch('http://localhost:3001/api/v1/users', postFormat)
      .then(response => response.json())
      .then(retrieveUserPantry)
      .catch(error => console.log(error))
      // .catch(error => window.alert(`You do not have enough ${item.json()} for this recipe.`))
  })
  displayPantryInfo(currentUser)
}

function retrieveUserPantry() {
  fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
    .then(users => {
      const updatedUser = users.find(user => user.id === currentUser.id)
      currentUser.pantry = updatedUser.pantry
      retrieveIngredientsData()
    })
}

// CREATE RECIPE CARDS
function createCards() {
  allRecipes.forEach(recipe => {
    let recipeName = recipe.name

    if (recipe.name.length > 40) {
      recipeName = recipe.name.substring(0, 40) + "...";
    }

    domUpdates.addCardToDom(recipe, recipeName)
    createCardListeners()
  })
}

function createCardListeners() {
  const allCards = document.querySelectorAll('.recipe--card')
  allCards.forEach(card => {
    card.addEventListener('click', interactWithRecipeCard)
  })
}

// FILTER BY RECIPE TAGS
function findTags() {
  const tags = []

  allRecipes.forEach(recipe => {
    recipe.tags.forEach(tag => {
      if (!tags.includes(tag)) {
        tags.push(tag)
      }
    })
  })

  tags.sort()
  domUpdates.addListTags(tags)
}

function findCheckedBoxes() {
  const tagCheckBoxes = document.querySelectorAll('.checked-tag')
  const checkBoxInfo = Array.from(tagCheckBoxes)

  const selectedTags = checkBoxInfo.filter(box => {
    return box.checked
  })

  findUntaggedRecipes(selectedTags)
}

function unhideRecipeCards() {
  const allCards = document.querySelectorAll('.recipe--card')

  allCards.forEach(card => card.classList.remove('hidden'))
}

function findUntaggedRecipes(selected) {
  const filteredRecipes = []

  selected.forEach(tag => {
    const recipes = allRecipes.filter(recipe => {
      return !recipe.tags.includes(tag.id)
    })

    recipes.forEach(recipe => {
      if (!filteredRecipes.includes(recipe)) {
        filteredRecipes.push(recipe)
      }
    })
  })

  hideUnselectedRecipes(filteredRecipes)
}

function hideUnselectedRecipes(foundRecipes) {
  unhideRecipeCards()
  foundRecipes.forEach(recipe => {
    const domRecipe = document.getElementById(`${recipe.id}`)
    domRecipe.classList.add('hidden')
  })
}

// FAVORITE RECIPE FUNCTIONALITY
function interactWithRecipeCard(event) {
  let cardId = parseInt(event.target.closest(".recipe--card").id)
  const recipeCard = document.getElementById(cardId)
  const cardClass = event.target.classList

  if (cardClass.contains("recipe--apple-icon") && cardClass.contains("unfilled")) {
    addToFavorites(cardId, recipeCard, cardClass)

  } else if (cardClass.contains("recipe--apple-icon")) {
    removeFromFavorites(cardId, recipeCard, cardClass)

  } else {
    openRecipeInstructions(event)
  }
}

function addToFavorites(cardId, recipeCard, cardClass) {
  event.target.src = "./images/apple-logo.png"
  cardClass.remove("unfilled")
  recipeCard.classList.add('favorite')
  currentUser.saveRecipe(cardId);
}

function removeFromFavorites(cardId, recipeCard, cardClass) {
  event.target.src = "./images/apple-logo-outline.png"
  cardClass.add("unfilled")
  recipeCard.classList.remove('favorite')
  currentUser.removeRecipe(cardId)
}

function showSavedRecipes() {
  recipeContainer.classList.value = ('display-favorites')
  showMyRecipesBanner()
}

// CREATE RECIPE MODAL
function openRecipeInstructions(event) {
  const recipeId = event.path.find(element => element.id).id
  const thisRecipe = allRecipes.find(recipe => recipe.id === Number(recipeId))
  cookRecipeButton.setAttribute('recipeid', recipeId)

  if (thisRecipe.dateCooked) {
    displayCookedDate(thisRecipe)
  }

  domUpdates.generateRecipeInstructions(thisRecipe, generateIngredients(thisRecipe))
  modalOverlay.style.display = 'block'
}

function exitRecipeInstructions() {
  fullRecipeInfo.style.display = 'none'
  modalOverlay.style.display = 'none'
  modalDateMessage.style.display = 'none'

  domUpdates.clearRecipeInstructions()
  domUpdates.clearShoppingList()
}

function displayCookedDate(selectedRecipe) {
  const cookedDate = selectedRecipe.dateCooked.toDateString()
  modalDateMessage.innerText = `Last cooked on: ${cookedDate}`
  modalDateMessage.style.display = 'inline'
}

function cookRecipe(event) {
  modalPantryMessage.style.display = 'inline'
  modalPantryMessage.style.opacity = 1

  updateCookedDate(event.target.getAttribute('recipeid'))
  updateUserPantry(event.target.getAttribute('recipeid'))

  setTimeout(function() {
    modalPantryMessage.style.opacity = 0
  }, 2000)
}

function updateCookedDate(recipeId) {
  const thisRecipe = allRecipes.find(recipe => recipe.id === Number(recipeId))

  const timeElapsed = Date.now()
  const today = new Date(timeElapsed)

  thisRecipe.dateCooked = today
  displayCookedDate(thisRecipe)
}

function generateIngredients(recipe) {
  determineIfEnoughIngredients(recipe)
  return recipe.ingredients.map(i => {
    const quantity = domUpdates.formatQuantity(i.quantity.amount)
    const unit = domUpdates.formatUnits(i.quantity.unit)

    return `${quantity} ${unit} ${domUpdates.lowerCase(i.name)}`
  }).join("\n")
}

function determineIfEnoughIngredients(selectedRecipe) {
  const shoppingList = []

  selectedRecipe.ingredients.forEach(recipeItem => {
    const userItem = currentUser.pantry.find(item => item.ingredient === recipeItem.id)
    const listItem = {}

    if (userItem) {
      const quantityNeeded = recipeItem.quantity.amount - userItem.amount

      if (userItem.amount < recipeItem.quantity.amount) {
        listItem.name = domUpdates.lowerCase(recipeItem.name)
        listItem.quantity = domUpdates.formatQuantity(quantityNeeded)
        listItem.unit = recipeItem.quantity.unit
        listItem.cost = recipeItem.cost.toFixed(2)

        if (listItem.quantity.toString().length > 3) {
          listItem.quantity = domUpdates.formatQuantity(quantityNeeded)
        }

        shoppingList.push(listItem)
      }

    } else if (!userItem) {
      listItem.name = domUpdates.lowerCase(recipeItem.name)
      listItem.quantity = domUpdates.formatQuantity(recipeItem.quantity.amount)
      listItem.unit = recipeItem.quantity.unit
      listItem.cost = recipeItem.cost.toFixed(2)

      if (listItem.quantity.toString().length > 3) {
        listItem.quantity = recipeItem.quantity.amount.toFixed(2)
      }

      shoppingList.push(listItem)
    }
  })

  if (shoppingList.length > 0) {
    domUpdates.displayShoppingList(shoppingList)
    cookRecipeButton.disabled = true
  }
}

// TOGGLE DISPLAYS
function showMyRecipesBanner() {
  document.querySelector(".banner--message").style.display = "none";
  document.querySelector(".banner--recipes").style.display = "flex";
}

function showWelcomeBanner() {
  document.querySelector(".banner--message").style.display = "block"
  document.querySelector(".banner--recipes").style.display = "none"
}

// SEARCH RECIPES

function pressEnterSearch(event) {
  event.preventDefault()
  searchRecipes()
}

function searchRecipes() {
  const value = searchInput.value.toLowerCase()

  const filteredByName = allRecipes.filter(recipe => {
    const name = recipe.name.toLowerCase()

    return !name.includes(value)
  })

  const filteredByIngredient = filteredByName.filter(recipe => {
    return !recipe.ingredients.some(ingredient => ingredient.name.toLowerCase().includes(value))
  })


  hideUnselectedRecipes(filteredByIngredient)
}

function togglePantryDisplay() {
  const menuDropdown = document.querySelector(".menu-pantry")
  menuOpen = !menuOpen

  if (menuOpen) {
    menuDropdown.style.display = "block";
  } else {
    menuDropdown.style.display = "none";
  }
}

function showAllRecipes() {
  allRecipes.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`)
    domRecipe.style.display = 'block'
  })

  recipeContainer.classList.remove('display-favorites')
  showWelcomeBanner()
}

// CREATE AND USE PANTRY
function displayPantryInfo(currentUser) {
  currentUser.pantry.sort(function(a, b) {
    if (a.name > b.name) {
      return 1

    } else if (a.name < b.name) {
      return -1
    }
  })

  domUpdates.addPantryInfoToDom(currentUser.pantry)
}

function findCheckedPantryBoxes() {
  let pantryCheckboxes = document.querySelectorAll(".pantry-checkbox");
  let pantryCheckboxInfo = Array.from(pantryCheckboxes)
  let selectedIngredients = pantryCheckboxInfo.filter(box => {
    return box.checked;
  })
  showAllRecipes();
  if (selectedIngredients.length > 0) {
    findRecipesWithCheckedIngredients(selectedIngredients);
  }
}

function findRecipesWithCheckedIngredients(selected) {
  let recipeChecker = (arr, target) => target.every(v => arr.includes(v));
  let ingredientNames = selected.map(item => {
    return item.id;
  })
  recipeData.forEach(recipe => {
    let allRecipeIngredients = [];
    recipe.ingredients.forEach(ingredient => {
      allRecipeIngredients.push(ingredient.name);
    });
    if (!recipeChecker(allRecipeIngredients, ingredientNames)) {
      let domRecipe = document.getElementById(`${recipe.id}`);
      domRecipe.style.display = "none";
    }
  })
}
