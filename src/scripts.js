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
})

showAllRecipesButton.addEventListener("click", showAllRecipes);
filterRecipesButton.addEventListener("click", findCheckedBoxes);
main.addEventListener("click", addToMyRecipes);
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
  recipeData.forEach(recipe => {
    let recipeInfo = new Recipe(recipe);
    let shortRecipeName = recipeInfo.name;
    recipes.push(recipeInfo);
    if (recipeInfo.name.length > 40) {
      shortRecipeName = recipeInfo.name.substring(0, 40) + "...";
    }
    domUpdates.addCardToDom(recipeInfo, shortRecipeName)
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
function addToMyRecipes() {
  if (event.target.className === "card-apple-icon") {
    let cardId = parseInt(event.target.closest(".recipe-card").id)
    if (!user.favoriteRecipes.includes(cardId)) {
      event.target.src = "../images/apple-logo.png";
      user.saveRecipe(cardId);
    } else {
      event.target.src = "../images/apple-logo-outline.png";
      user.removeRecipe(cardId);
    }
  } else if (event.target.id === "exit-recipe-btn") {
    exitRecipe();
  } else if (isDescendant(event.target.closest(".recipe--card"), event.target)) {
    openRecipeInfo(event);
  }
}

function isDescendant(parent, child) {
  let node = child;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

function showSavedRecipes() {
  let unsavedRecipes = recipes.filter(recipe => {
    return !user.favoriteRecipes.includes(recipe.id);
  });
  unsavedRecipes.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`);
    domRecipe.style.display = "none";
  });
  showMyRecipesBanner();
}

// CREATE RECIPE INSTRUCTIONS
function openRecipeInfo(event) {
  let recipeId = event.path.find(e => e.id).id
  let recipe = recipeData.find(recipe => recipe.id === Number(recipeId))
  domUpdates.generateRecipeInstructions(recipe, generateIngredients(recipe))
  generateInstructions(recipe)
}

function addRecipeImage(recipe) {
  document.getElementById("modal--title").style.backgroundImage = `url(${recipe.image})`;
}

function generateIngredients(recipe) {
  return recipe && recipe.ingredients.map(i => {
    return `${domUpdates.capitalize(i.name)} (${i.quantity.amount} ${i.quantity.unit})`
  }).join(", ");
}

function generateInstructions(recipe) {
  let instructions = recipe.instructions.map(i => {
    return i.instruction
  })
}

function exitRecipe() {
  fullRecipeInfo.style.display = "none"
  // document.getElementById("overlay").remove()
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
