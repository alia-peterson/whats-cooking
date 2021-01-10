// import users from './data/users-data';
import recipeData from  './data/recipe-data';
// import ingredientData from './data/ingredient-data';
import domUpdates from './domUpdates'

import './css/base.scss';
import './css/styles.scss';

import User from './user';
import Recipe from './recipe';

const main = document.querySelector(".container")
const showAllRecipesButton = document.querySelector(".button-show-all")
const filterRecipesButton = document.querySelector(".button-filter")
const fullRecipeInfo = document.querySelector(".recipe--instructions")
const myPantryButton = document.querySelector(".button-pantry")
const savedRecipesButton = document.querySelector(".button-saved")
const searchForm = document.querySelector("#search")
const searchInput = document.querySelector("#search-input")
// const pantryInfo = []
const allRecipes = []
let menuOpen = false
let user


window.addEventListener("load", function() {
  retrieveRecipeData()
  .then(generateUser)
  .then(retrieveIngredientsData)
  .then(() => displayPantryInfo(user))
  .then(createCards)
  .then(findTags)
})

showAllRecipesButton.addEventListener('click', showAllRecipes)
filterRecipesButton.addEventListener('click', findCheckedBoxes)
myPantryButton.addEventListener('click', togglePantryDisplay)
savedRecipesButton.addEventListener('click', showSavedRecipes)
searchForm.addEventListener('submit', pressEnterSearch)
searchInput.addEventListener('keyup', searchRecipes)

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
      allRecipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
          const foundItem = data.find(item => item.id === ingredient.id)
          ingredient.name = foundItem.name
          ingredient.cost = foundItem.estimatedCostInCents
        })
      })

      user.pantry.forEach(pantryItem => {
        const foundItem = data.find(item => item.id === pantryItem.ingredient)
        pantryItem.name = foundItem.name
      })
    })
}

function generateUser() {
  fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
    .then(users => {
      user = new User(users[Math.floor(Math.random() * users.length)])
      let firstName = user.name.split(" ")[0]
      domUpdates.addWelcomeMessage(firstName)
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
    openRecipeInfo(event)
  }
}

function addToFavorites(cardId, recipeCard, cardClass) {
  event.target.src = "./images/apple-logo.png"
  cardClass.remove("unfilled")
  recipeCard.classList.add('favorite')
  user.saveRecipe(cardId);
}

function removeFromFavorites(cardId, recipeCard, cardClass) {
  event.target.src = "./images/apple-logo-outline.png"
  cardClass.add("unfilled")
  recipeCard.classList.remove('favorite')
  user.removeRecipe(cardId)
}

function showSavedRecipes() {
  main.classList.value = ('display-favorites')
  showMyRecipesBanner()
}

// CREATE RECIPE MODAL
function openRecipeInfo(event) {
  let recipeId = event.path.find(e => e.id).id
  let recipe = allRecipes.find(recipe => recipe.id === Number(recipeId))
  domUpdates.generateRecipeInstructions(recipe, generateIngredients(recipe))
  const exitButton = document.querySelector('#button-exit')
  exitButton.addEventListener('click', exitRecipe)
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
    const userItem = user.pantry.find(item => item.ingredient === recipeItem.id)
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
  }
}

function exitRecipe() {
  fullRecipeInfo.style.display = "none"
  domUpdates.clearRecipeInstructions()
  domUpdates.clearShoppingList()
  // still need to incorporate overlay into background so that other
  // cards can not be selected while the modal is open
}

// TOGGLE DISPLAYS
function showMyRecipesBanner() {
  document.querySelector(".banner--message").style.display = "none"
  document.querySelector(".banner--recipes").style.display = "block"
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

  main.classList.remove('display-favorites')
  showWelcomeBanner()
}

// CREATE AND USE PANTRY
function displayPantryInfo(user) {
  user.pantry.sort(function(a, b) {
    if (a.name > b.name) {
      return 1

    } else if (a.name < b.name) {
      return -1
    }
  })

  domUpdates.addPantryInfo(user.pantry)
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
