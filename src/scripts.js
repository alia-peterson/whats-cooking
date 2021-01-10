// import users from './data/users-data';
import recipeData from  './data/recipe-data';
// import ingredientData from './data/ingredient-data';
import domUpdates from './domUpdates'

import './css/base.scss';
import './css/styles.scss';

import User from './user';
import Recipe from './recipe';

const main = document.querySelector('.container')
const showAllRecipesButton = document.querySelector('#button-show-all')
const searchButton = document.querySelector('#button-search')
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
let user

window.addEventListener("load", function() {
  retrieveRecipeData()
    .then(generateUser)
    .then(retrieveIngredientsData)
    .then(() => displayPantryInfo(user))
    .then(createCards)
    .then(findTags)
})

searchForm.addEventListener("submit", pressEnterSearch)
showAllRecipesButton.addEventListener("click", showAllRecipes)
searchButton.addEventListener("click", searchRecipes)
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
  user.pantry.forEach(pantryItem => {
    const foundItem = data.find(item => item.id === pantryItem.ingredient)
    pantryItem.name = foundItem.name
  })
}

function generateUser() {
  return fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
    .then(users => {
      user = new User(users[Math.floor(Math.random() * users.length)])
      let firstName = user.name.split(" ")[0]
      domUpdates.addWelcomeMessage(firstName)
    })
}

function updateUserPantry(ingredientsToUpdate) {
  ingredientsToUpdate.forEach(item => {
    const updatedIngredient = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: {
        ingredient: item.id,
        name: item.name,
        amount: item.amount
      }
    }
  })

  // fetch('http://localhost:3001/api/v1/users', updatedIngredient)
  //   .then(response => response.json())
  //   .then(users.pantry => {
  //
  //   })
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
  console.log(allRecipes);
}

function createCardListeners() {
  const allCards = document.querySelectorAll('.recipe--card')
  allCards.forEach(card => {
    card.addEventListener('click', interactWithRecipeCard)
  })
}

// FILTER BY RECIPE TAGS
function findTags() {
  let tags = [];
  recipeData.forEach(recipe => {
    recipe.tags.forEach(tag => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
  });
  tags.sort();
  domUpdates.addListTags(tags);
}

function findCheckedBoxes() {
  let tagCheckboxes = document.querySelectorAll(".checked-tag");
  let checkboxInfo = Array.from(tagCheckboxes)
  let selectedTags = checkboxInfo.filter(box => {
    return box.checked;
  })
  findTaggedRecipes(selectedTags);
}

function findTaggedRecipes(selected) {
  let filteredResults = [];
  selected.forEach(tag => {
    let recipes = recipeData.filter(recipe => {
      return recipe.tags.includes(tag.id);
    });
    recipeData.forEach(recipe => {
      if (!filteredResults.includes(recipe)) {
        filteredResults.push(recipe);
      }
    })
  });
  showAllRecipes();
  if (filteredResults.length > 0) {
    filterRecipes(filteredResults);
  }
}

function filterRecipes(filtered) {
  let foundRecipes = recipeData.filter(recipe => {
    return !filtered.includes(recipe);
  });
  hideUnselectedRecipes(foundRecipes)
}

function hideUnselectedRecipes(foundRecipes) {
  foundRecipes.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`);
    domRecipe.style.display = "none";
  });
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
  user.saveRecipe(cardId);
}

function removeFromFavorites(cardId, recipeCard, cardClass) {
  event.target.src = "./images/apple-logo-outline.png"
  cardClass.add("unfilled")
  recipeCard.classList.remove('favorite')
  user.removeRecipe(cardId)
}

function showSavedRecipes() {
  main.classList.add('display-favorites')
  showMyRecipesBanner()
}

// CREATE RECIPE MODAL
function openRecipeInstructions(event) {
  const recipeId = event.path.find(element => element.id).id
  const thisRecipe = allRecipes.find(recipe => recipe.id === Number(recipeId))
  cookRecipeButton.recipeId = recipeId

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
}

function displayCookedDate(selectedRecipe) {
  const cookedDate = selectedRecipe.dateCooked.toDateString()
  modalDateMessage.innerText = `Last cooked on: ${cookedDate}`
  modalDateMessage.style.display = 'inline'
}

function cookRecipe(event) {
  modalPantryMessage.style.display = 'inline'
  modalPantryMessage.style.opacity = 1

  updateCookedDate(event.target.recipeId)
  // updateUserPantry()

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
    return `${i.quantity.amount} ${i.quantity.unit} ${i.name}`
  }).join("\n");
}

function determineIfEnoughIngredients(selectedRecipe) {
  const shoppingList = []
  const listItem = {}

  selectedRecipe.ingredients.forEach(recipeItem => {
    const userItem = user.pantry.find(item => item.ingredient === recipeItem.id)

    if (userItem) {
      if (userItem.amount < recipeItem.quantity.amount) {
        listItem.name = recipeItem.name
        listItem.quantity = recipeItem.quantity.amount - userItem.amount
        listItem.cost = recipeItem.cost
        shoppingList.push(listItem)
      }
    } else if (!userItem) {
      listItem.name = recipeItem.name
      listItem.quantity = recipeItem.quantity.amount
      listItem.cost = recipeItem.cost
      shoppingList.push(listItem)
    }
  })

  if (shoppingList.length > 0) {
    domUpdates.displayShoppingList(shoppingList)
  }
}

// TOGGLE DISPLAYS
function showMyRecipesBanner() {
  document.querySelector(".banner--message").style.display = "none";
  document.querySelector(".banner--recipes").style.display = "flex";
}

function showWelcomeBanner() {
  document.querySelector(".banner--message").style.display = "block";
  document.querySelector(".banner--recipes").style.display = "none";
}

// SEARCH RECIPES
function pressEnterSearch(event) {
  event.preventDefault();
  searchRecipes();
}

function searchRecipes() {
  showAllRecipes();
  let searchedRecipes = recipeData.filter(recipe => {
    return recipe.name.toLowerCase().includes(searchInput.value.toLowerCase());
  });
  filterNonSearched(createRecipeObject(searchedRecipes));
}

function filterNonSearched(filtered) {
  let found = recipeData.filter(recipe => {
    let ids = filtered.map(f => f.id);
    return !ids.includes(recipe.id)
  })
  hideUnselectedRecipes(found);
}

function createRecipeObject(recipesInput) {
  recipes = recipesInput.map(recipe => new Recipe(recipe));
  return recipes
}

function togglePantryDisplay() {
  var menuDropdown = document.querySelector(".menu-pantry");
  menuOpen = !menuOpen;

  if (menuOpen) {
    menuDropdown.style.display = "block";
  } else {
    menuDropdown.style.display = "none";
  }
}

function showAllRecipes() {
  allRecipes.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`)
    domRecipe.style.display = "block"
  })

  main.classList.remove("display-favorites")
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

  domUpdates.addPantryInfoToDom(user.pantry)
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
