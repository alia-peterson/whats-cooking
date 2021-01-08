import users from './data/users-data';
import recipeData from  './data/recipe-data';
import ingredientData from './data/ingredient-data';
import domUpdates from './domUpdates'

import './css/base.scss';
import './css/styles.scss';

import User from './user';
import Recipe from './recipe';

const main = document.querySelector(".container")
const showAllRecipesButton = document.querySelector(".show-all-btn")
const filterRecipesButton = document.querySelector(".filter-btn")
const fullRecipeInfo = document.querySelector(".recipe--instructions")
const myPantryButton = document.querySelector(".my-pantry-btn")
const savedRecipesButton = document.querySelector(".saved-recipes-btn")
const searchButton = document.querySelector(".search-btn")
const searchForm = document.querySelector("#search")
const searchInput = document.querySelector("#search-input")
const pantryRecipeButton = document.querySelector(".show-pantry-recipes-btn")
let menuOpen = false
let pantryInfo = []
let recipes = []
let user


window.addEventListener("load", function() {
  createCards()
  findTags()
  generateUser()
  // createCardListeners()
})

showAllRecipesButton.addEventListener("click", showAllRecipes);
filterRecipesButton.addEventListener("click", findCheckedBoxes);
// main.addEventListener("click", interactWithRecipeCard);
myPantryButton.addEventListener("click", toggleMenu);
savedRecipesButton.addEventListener("click", showSavedRecipes);
searchButton.addEventListener("click", searchRecipes);
pantryRecipeButton.addEventListener("click", findCheckedPantryBoxes);
searchForm.addEventListener("submit", pressEnterSearch);

// GENERATE A USER ON LOAD
function generateUser() {
  user = new User(users[Math.floor(Math.random() * users.length)])
  let firstName = user.name.split(" ")[0]
  domUpdates.addWelcomeMessage(firstName)

  findPantryInfo()
}

// CREATE RECIPE CARDS
function createCards() {
  fetch('http://localhost:3001/api/v1/recipes')
    .then(response => response.json())
    .then(recipes => {
      recipes.forEach(recipe => {
        const recipeInfo = new Recipe(recipe)
        let recipeName = recipeInfo.name

        if (recipeInfo.name.length > 40) {
          recipeName = recipeInfo.name.substring(0, 40) + "...";
        }

        domUpdates.addCardToDom(recipeInfo, recipeName)
        createCardListeners()
      })
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
    let allRecipes = recipes.filter(recipe => {
      return recipe.tags.includes(tag.id);
    });
    allRecipes.forEach(recipe => {
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
  let foundRecipes = recipes.filter(recipe => {
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
  main.classList.add('display-favorites')
  showMyRecipesBanner()
}

// CREATE RECIPE INSTRUCTIONS
function openRecipeInfo(event) {
  let recipeId = event.path.find(e => e.id).id
  let recipe = recipeData.find(recipe => recipe.id === Number(recipeId))
  domUpdates.generateRecipeInstructions(recipe, generateIngredients(recipe))
  const exitButton = document.querySelector('#exit-recipe-btn')
  exitButton.addEventListener('click', exitRecipe)
}

function generateIngredients(recipe) {
  return recipe && recipe.ingredients.map(i => {
    return `${domUpdates.capitalize(i.name)} (${i.quantity.amount} ${i.quantity.unit})`
  }).join(", ");
}

function exitRecipe() {
  fullRecipeInfo.style.display = "none"
  domUpdates.clearRecipeInstructions()
  // still need to incorporate overlay into background so that other
  // cards can not be selected while the modal is open
}

// TOGGLE DISPLAYS
function showMyRecipesBanner() {
  document.querySelector(".welcome-msg").style.display = "none";
  document.querySelector(".my-recipes-banner").style.display = "block";
}

function showWelcomeBanner() {
  document.querySelector(".welcome-msg").style.display = "flex";
  document.querySelector(".my-recipes-banner").style.display = "none";
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
  let found = recipes.filter(recipe => {
    let ids = filtered.map(f => f.id);
    return !ids.includes(recipe.id)
  })
  hideUnselectedRecipes(found);
}

function createRecipeObject(recipes) {
  recipes = recipes.map(recipe => new Recipe(recipe));
  return recipes
}

function toggleMenu() {
  var menuDropdown = document.querySelector(".drop-menu");
  menuOpen = !menuOpen;
  if (menuOpen) {
    menuDropdown.style.display = "block";
  } else {
    menuDropdown.style.display = "none";
  }
}

function showAllRecipes() {
  recipes.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`);
    domRecipe.style.display = "block";
  });
  main.classList.remove("display-favorites")
  showWelcomeBanner();
}

// CREATE AND USE PANTRY
function findPantryInfo() {
  user.pantry.forEach(item => {
    let itemInfo = ingredientsData.find(ingredient => {
      return ingredient.id === item.ingredient;
    });
    let originalIngredient = pantryInfo.find(ingredient => {
      if (itemInfo) {
        return ingredient.name === itemInfo.name;
      }
    });
    if (itemInfo && originalIngredient) {
      originalIngredient.count += item.amount;
    } else if (itemInfo) {
      pantryInfo.push({name: itemInfo.name, count: item.amount});
    }
  });
  domUpdates.displayPantryInfo(pantryInfo.sort((a, b) => a.name.localeCompare(b.name)));
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
  recipes.forEach(recipe => {
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
