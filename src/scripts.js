// import users from './data/users-data';
import recipeData from  './data/recipe-data';
// import ingredientData from './data/ingredient-data';
import domUpdates from './domUpdates'
import fetchApi from './fetchApi'

import './css/base.scss';
import './css/styles.scss';

import User from './user';
import Recipe from './recipe';


const main = document.querySelector('.container')
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
const modalDateMessage = document.querySelector('#modal--message-date')
const modalShoppingMessage = document.querySelector('.modal--message-shopping')
const modalCookedMessage = document.querySelector('.modal--message-cooked')
const allRecipes = []
let menuOpen = false
let currentUser

searchForm.addEventListener("submit", pressEnterSearch)
searchInput.addEventListener('keyup', searchRecipes)
showAllRecipesButton.addEventListener("click", showAllRecipes)
savedRecipesButton.addEventListener("click", showSavedRecipes)
myPantryButton.addEventListener("click", togglePantryDisplay)
filterRecipesButton.addEventListener("click", findCheckedBoxes)
exitButton.addEventListener('click', exitRecipeInstructions)
cookRecipeButton.addEventListener('click', cookRecipe)
shoppingListButton.addEventListener('click', shopRecipe)

// FETCH API DATASETS
const fetchedUserData = fetchApi.getUserData()
const fetchedRecipeData = fetchApi.getRecipeData()
const fetchedIngredientData = fetchApi.getIngredientsData()

Promise.all([fetchedUserData, fetchedRecipeData, fetchedIngredientData])
  .then(values => {
    generateUser(values[0])
    createRecipeDataset(values[1])
    addRecipeNameAndCost(values[2])
    addPantryIngredientNames(values[2])
    loadWebsite()
  })

function loadWebsite() {
  createRecipeCards()
  displayPantryInfo(currentUser)
  findTags()
}

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
    recipe.ingredients.forEach(ingredient => {
      const foundItem = allIngredients.find(item => item.id === ingredient.id)
      ingredient.name = foundItem.name
      ingredient.cost = foundItem.estimatedCostInCents
    })
  })
}

function addPantryIngredientNames(allIngredients) {
  currentUser.pantry.forEach(pantryItem => {
    const foundItem = allIngredients.find(item => item.id === pantryItem.ingredient)
    pantryItem.name = foundItem.name
  })
}

function updateUserPantryFromRecipe(recipeId, typeModification) {
  let promise

  const thisRecipe = allRecipes.find(recipe => recipe.id === Number(recipeId))
  thisRecipe.ingredients.forEach(item => {
    let ingredientModificationValue = item.quantity.amount

    if (typeModification === 'subtract') {
      ingredientModificationValue = -item.quantity.amount
    }

    const updatedPantryItem = {
      userID: currentUser.id,
      ingredientID: item.id,
      ingredientModification: ingredientModificationValue
    }

    promise = fetchApi.postUserInformation(updatedPantryItem)
  })
  return promise
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
  const promiseFromPosts = await updateUserPantryFromRecipe(recipeId, typeModification)
  const updatedUserPantry = await retrieveUpdatedUserPantry()
  const updatedPantryNames = await fetchedIngredientData.then(array => {
    addPantryIngredientNames(array)
  })

  displayPantryInfo(currentUser)
}

// CREATE RECIPE CARDS
function createRecipeCards() {
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

  unhideRecipeCards()
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
  main.classList.value = ('display-favorites')
  showMyRecipesBanner()
}

// CREATE RECIPE MODAL
function openRecipeInstructions(event) {
  const recipeId = event.path.find(element => element.id).id
  const thisRecipe = allRecipes.find(recipe => recipe.id === Number(recipeId))
  cookRecipeButton.setAttribute('recipeid', recipeId)
  shoppingListButton.setAttribute('recipeid', recipeId)

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
  modalCookedMessage.style.display = 'inline'
  modalCookedMessage.style.opacity = 1

  const recipeID = event.target.getAttribute('recipeid')
  const currentRecipe = allRecipes.find(recipe => recipe.id === Number(recipeID))

  determineIfEnoughIngredients(currentRecipe)
  updateCookedDate(recipeID)
  updateUserPantryDisplay(recipeID, 'subtract')

  setTimeout(function() {
    modalCookedMessage.style.opacity = 0
  }, 2000)
}

function shopRecipe(event) {
  modalShoppingMessage.style.display = 'inline'
  modalShoppingMessage.style.opacity = 1

  const recipeID = event.target.getAttribute('recipeid')
  const currentRecipe = allRecipes.find(recipe => recipe.id === Number(recipeID))

  // determineIfEnoughIngredients(currentRecipe)
  domUpdates.clearShoppingList()
  updateUserPantryDisplay(recipeID)

  setTimeout(function() {
    modalCookedMessage.style.opacity = 0
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
  domUpdates.clearShoppingList()

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
  document.querySelector(".banner--message").style.display = 'none'
  document.querySelector(".banner--recipes").style.display = 'flex'
}

function showWelcomeBanner() {
  document.querySelector(".banner--message").style.display = 'block'
  document.querySelector(".banner--recipes").style.display = 'none'
}

// SEARCH RECIPES

function pressEnterSearch(event) {
  event.preventDefault()
  searchRecipes()
}

function searchRecipes() {
  unhideRecipeCards();
  const searchValue = searchInput.value.toLowerCase()

  const notSearchedNames = allRecipes.filter(recipe => {
    return !recipe.name.toLowerCase().includes(searchValue)
  })

  const notSearchedRecipes = notSearchedNames.filter(recipe => {
    return recipe.ingredients.some(ingredient => !ingredient.name.toLowerCase().includes(searchValue))
  })

  hideUnselectedRecipes(notSearchedRecipes)
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

  main.classList.remove('display-favorites')
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
