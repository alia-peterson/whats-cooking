import users from './data/users-data';
import recipeData from  './data/recipe-data';
import ingredientData from './data/ingredient-data';
import domUpdates from './domUpdates'

import './css/base.scss';
import './css/styles.scss';

import User from './user';
import Recipe from './recipe';

let main = document.querySelector(".container")
let showAllRecipesButton = document.querySelector(".show-all-btn")
let filterRecipesButton = document.querySelector(".filter-btn")
let fullRecipeInfo = document.querySelector(".recipe-instructions")
let myPantryButton = document.querySelector(".my-pantry-btn")
let savedRecipesButton = document.querySelector(".saved-recipes-btn")
let searchButton = document.querySelector(".search-btn")
let searchForm = document.querySelector("#search")
let searchInput = document.querySelector("#search-input")
let pantryRecipeButton = document.querySelector(".show-pantry-recipes-btn")
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
// main.addEventListener("click", addToMyRecipes);
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
  createCardListeners()
}

function createCardListeners() {
  const allCards = document.querySelectorAll('.recipe-card')
  allCards.forEach(card => {
    card.addEventListener('click', addToMyRecipes)
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
function addToMyRecipes(event) {  // When you click apple logo
  if (event.target.className === "card-apple-icon") { // if they click the apple
    let cardId = parseInt(event.target.closest(".recipe-card").id) // get recipe parent id
    if (!user.favoriteRecipes.includes(cardId)) { // if the user's favorite recipes array DOES NOT include that id
      event.target.src = "../images/apple-logo.png"; // then change the image to filled in apple
      user.saveRecipe(cardId); // add it to favorite recipes array
    } else { // if id is already in favorites array
      event.target.src = "../images/apple-logo-outline.png"; // change it back to the outline
      user.removeRecipe(cardId); // remove from favorites array
      // showSavedRecipes(); // INVOKE DOM REMOVAL HERE TO FIX ISSUE
    }
  } else { // if they click anywhere else on the recipe card
    openRecipeInfo(event); // open the recipe modal
  // } else if (event.target.id === "exit-recipe-btn") { // if they click the X (in generateRecipeTitle)
  //   exitRecipe(); // don't display recipe instructions
  // } else if (isDescendant(event.target.closest(".recipe-card"), event.target)) { // if they click anywhere else on the recipe card
  //   openRecipeInfo(event); // open the recipe modal
  // }
  }
}

// function isDescendant(parent, child) { // invoked in addToMyRecipes
//   let node = child; // child is wherever they clicked
//   while (node !== null) { // if whatever they clicked is something
//     if (node === parent) { // if its the same thing as .recipe-card
//       return true;
//     }
//     node = node.parentNode; // reassign child to be .recipe-card
//   }
//   return false; // if they didn't click on anything, do nothing
// }

function showSavedRecipes() { // when they click My Recipes button
  let unsavedRecipes = recipes.filter(recipe => { // iterate through all recipes
    return !user.favoriteRecipes.includes(recipe.id); // for each recipe, return recipes that are NOT in their favorites
  });
  unsavedRecipes.forEach(recipe => { // iterate over un-favorited recipes
    let domRecipe = document.getElementById(`${recipe.id}`); // get the dom element of each recipe
    domRecipe.style.display = "none"; // set its display to none (so only show favorites)
  });
  showMyRecipesBanner(); // change banner to My Recipes, display button to go back to main
}

// CREATE RECIPE INSTRUCTIONS
function openRecipeInfo(event) {
  fullRecipeInfo.style.display = "inline";
  let recipeId = event.path.find(e => e.id).id;
  let recipe = recipeData.find(recipe => recipe.id === Number(recipeId));
  domUpdates.generateRecipeTitle(recipe, generateIngredients(recipe));
  addRecipeImage(recipe);
  generateInstructions(recipe);
  domUpdates.fullRecipeInfoDisplay('beforebegin', `<section id='overlay'></section>`)
}

function addRecipeImage(recipe) {
  document.getElementById("recipe-title").style.backgroundImage = `url(${recipe.image})`;
}

function generateIngredients(recipe) {
  return recipe && recipe.ingredients.map(i => {
    return `${domUpdates.capitalize(i.name)} (${i.quantity.amount} ${i.quantity.unit})`
  }).join(", ");
}

function generateInstructions(recipe) {
  let instructionsList = ''
  let instructions = recipe.instructions.map(i => {
    return i.instruction
  })

  domUpdates.createListElements(instructions)
  domUpdates.fullRecipeInfoDisplay('beforeend', '<h4>Instructions</h4>')
  domUpdates.fullRecipeInfoDisplay('beforeend', `<ol>${instructionsList}</ol>`)
}

function exitRecipe() {
  while (fullRecipeInfo.firstChild &&
    fullRecipeInfo.removeChild(fullRecipeInfo.firstChild));
  fullRecipeInfo.style.display = "none";
  document.getElementById("overlay").remove();
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
