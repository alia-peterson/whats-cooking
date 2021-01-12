import domUpdates from './domUpdates'
import fetchApi from './fetchApi'

import './css/index.scss'

import User from './user'
import Recipe from './recipe'

const recipeContainer = document.querySelector('.recipe--container')
const showAllRecipesButton = document.querySelector('#button-show-all')
const savedRecipesButton = document.querySelector('#button-saved')
const myPantryButton = document.querySelector('#button-pantry')
const filterRecipesButton = document.querySelector('#button-filter')
const exitButton = document.querySelector('#button-exit')
const shoppingListButton = document.querySelector('#button-shopping')
const cookRecipeButton = document.querySelector('#button-cooked')
const fullRecipeInfo = document.querySelector('.recipe--instructions')
const searchForm = document.querySelector('#search')
const searchInput = document.querySelector('#search-input')
const modalOverlay = document.querySelector('.overlay')
const modalIngredientsMessage = document.querySelector('#modal--message-ingredients')
const modalDateMessage = document.querySelector('#modal--message-date')
const modalShoppingMessage = document.querySelector('#modal--message-shopping')
const modalCookedMessage = document.querySelector('#modal--message-cooked')
const allRecipes = []
let menuOpen = false
let currentUser

searchForm.addEventListener('submit', pressEnterSearch)
searchInput.addEventListener('keyup', searchRecipes)
showAllRecipesButton.addEventListener('click', showAllRecipes)
savedRecipesButton.addEventListener('click', showSavedRecipes)
myPantryButton.addEventListener('click', togglePantryDisplay)
filterRecipesButton.addEventListener('click', findCheckedBoxes)
exitButton.addEventListener('click', exitRecipeInstructions)

cookRecipeButton.addEventListener('click', function() {
  cookOrShopRecipe(modalCookedMessage, 'subtract', event)
})

shoppingListButton.addEventListener('click', function() {
  cookOrShopRecipe(modalShoppingMessage, 'add', event)
})

// FETCH API DATASETS
const fetchedUserData = fetchApi.getUserData()
const fetchedRecipeData = fetchApi.getRecipeData()
const fetchedIngredientData = fetchApi.getIngredientsData()

Promise.all([fetchedUserData, fetchedRecipeData, fetchedIngredientData])
  .then(values => {
    generateUser(values[0])
    createRecipeDataset(values[1])
    addRecipeNameAndCost(values[2])
    // currentUser.addPantryIngredientNames(values[2])
    loadWebsite()
  })

function loadWebsite() {
  createRecipeCards()
  domUpdates.addPantryInfoToDom(currentUser.alphabetizePantry())
  findTags()
}

// POPULATE WEBSITE INFORMATION
function generateUser(userData) {
  currentUser = new User(userData[Math.floor(Math.random() * userData.length)])
  let firstName = currentUser.name.split(" ")[0]
  domUpdates.addWelcomeMessage(firstName)
}

function createRecipeDataset(recipeInfo) {
  recipeInfo.forEach(recipe => {
    const newRecipe = new Recipe(recipe)
    allRecipes.push(newRecipe)
  })
}

function addRecipeNameAndCost(allIngredients) {
  allRecipes.forEach(recipe => {
    recipe.updateIngredientsInfo(allIngredients)
  })

  currentUser.addPantryIngredientNames(allIngredients)
}

// FIND A SPECIFIC RECIPE
function findRecipe(recipeId) {
 return allRecipes.find(recipe => recipe.id === Number(recipeId))
}



// USER PANTRY DISPLAY AND UPDATES
function updateUserPantryFromRecipe(recipeId, typeModification) {
  const thisRecipe = findRecipe(recipeId)
  const apiCalls = thisRecipe.ingredients.map(item => {
    let ingredientModificationValue = item.quantity.amount

    if (typeModification === 'subtract') {
      ingredientModificationValue = -item.quantity.amount
    }

    const updatedPantryItem = {
      userID: currentUser.id,
      ingredientID: item.id,
      ingredientModification: ingredientModificationValue
    }

    return fetchApi.postUserInformation(updatedPantryItem)
  })

  Promise.all(apiCalls)
}

function retrieveUpdatedUserPantry() {
  const userPromise = fetchApi.getUserData()
  userPromise.then(users => {
    const updatedUser = users.find(user => user.id === currentUser.id)
    currentUser.pantry = updatedUser.pantry
  })

  return userPromise
}

async function updateUserPantryDisplay(recipeId, typeModification = 'add') {
  await updateUserPantryFromRecipe(recipeId, typeModification)
  await retrieveUpdatedUserPantry()
  await fetchedIngredientData.then(array => {
    currentUser.addPantryIngredientNames(array)
  })

  domUpdates.addPantryInfoToDom(currentUser.alphabetizePantry())
}

// CREATE RECIPE CARDS
function createRecipeCards() {
  allRecipes.forEach(recipe => {
    domUpdates.addCardToDom(recipe, recipe.formatName())
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
  currentUser.saveRecipe(cardId)
}

function removeFromFavorites(cardId, recipeCard, cardClass) {
  event.target.src = "./images/apple-logo-outline.png"
  cardClass.add("unfilled")
  recipeCard.classList.remove('favorite')
  currentUser.removeRecipe(cardId)
}

function showSavedRecipes() {
  recipeContainer.classList.value = ('display-favorites')
  toggleBanner('none', 'flex')

}

// RECIPE MODAL
function openRecipeInstructions(event) {
  const recipeId = event.path.find(element => element.id).id
  const thisRecipe = findRecipe(recipeId)

  determineIfEnoughIngredients(thisRecipe)

  cookRecipeButton.setAttribute('recipeid', recipeId)
  shoppingListButton.setAttribute('recipeid', recipeId)

  if (thisRecipe.dateCooked) {
    displayCookedDate(thisRecipe)
  }

  domUpdates.generateRecipeInstructions(thisRecipe)
  domUpdates.generateRecipeIngredients(thisRecipe)
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

function updateCookedDate(recipeId) {
  const thisRecipe = findRecipe(recipeId)

  const timeElapsed = Date.now()
  const today = new Date(timeElapsed)

  thisRecipe.dateCooked = today
  displayCookedDate(thisRecipe)
}

async function cookOrShopRecipe(messageType, modification, event) {
  messageType.style.display = 'inline'
  messageType.style.opacity = 1
  shoppingListButton.disabled = true
  cookRecipeButton.disabled = true

  const recipeID = event.target.getAttribute('recipeid')
  const currentRecipe = findRecipe(recipeID)

  await updateUserPantryDisplay(recipeID, modification)

  setTimeout(function() {
    messageType.style.opacity = 0
    shoppingListButton.disabled = false
    cookRecipeButton.disabled = false
  }, 1500)

  if (modification === 'subtract') {
    updateCookedDate(recipeID)
    determineIfEnoughIngredients(currentRecipe)

  } else {
    domUpdates.clearShoppingList()
    modalIngredientsMessage.style.display = 'none'
    setModalButtonDisplay('block', 'none')
  }
}

function setModalButtonDisplay(cookRecipeState, shopRecipeState) {
  cookRecipeButton.style.display = cookRecipeState
  shoppingListButton.style.display = shopRecipeState
}

function determineIfEnoughIngredients(selectedRecipe) {
  const shoppingList = []

  selectedRecipe.ingredients.forEach(recipeItem => {
    const userItem = currentUser.pantry.find(item => item.ingredient === recipeItem.id)

    const listItem = {
      name: domUpdates.lowerCase(recipeItem.name),
      quantity: domUpdates.formatQuantity(recipeItem.quantity.amount),
      unit: recipeItem.quantity.unit,
      cost: recipeItem.cost.toFixed(2)
    }

    if (userItem) {
      const quantityNeeded = recipeItem.quantity.amount - userItem.amount

      if (quantityNeeded > 0) {
        listItem.quantity = domUpdates.formatQuantity(quantityNeeded)
      }
    }

    shoppingList.push(listItem)
  })

  if (shoppingList.length > 0) {
    domUpdates.displayShoppingList(shoppingList)
    modalIngredientsMessage.style.display = 'inline'
    setModalButtonDisplay('none', 'block')

  } else {
    modalIngredientsMessage.style.display = 'none'
    setModalButtonDisplay('block', 'none')
  }
}

// TOGGLE DISPLAYS
function toggleBanner(messageBanner, recipeBanner) {
  document.querySelector(".banner--message").style.display = messageBanner
  document.querySelector(".banner--recipes").style.display = recipeBanner
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
  const menuDropdown = document.querySelector('.menu-pantry')
  menuOpen = !menuOpen

  if (menuOpen) {
    menuDropdown.style.display = 'block'
  } else {
    menuDropdown.style.display = 'none'
  }
}

function showAllRecipes() {
  allRecipes.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`)
    domRecipe.style.display = 'block'
  })

  recipeContainer.classList.remove('display-favorites')
  toggleBanner('block', 'none')
}
