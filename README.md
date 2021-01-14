---
# Whats Cookin'?
###### Meals made easy!
---
## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Technologies](#technologies)
* [Deployment](#deployment)
* [Authors](#authors)

## Introduction
The primary goal of [Whats-Cookin](https://github.com/alia-peterson/whats-cooking) is to help users plan their meals. They can search through a log of recipes, save their favorite recipes, and keep track of their pantry. The specifications can be found [here](https://frontend.turing.io/projects/whats-cookin.html) and [here](https://frontend.turing.io/projects/module-2/refactor-tractor-wc.html).

## Motivation
The motivation behind this project was to get experience working in an existing code base. It also allowed the opportunity to practice using `Fetch` API and updating code to incorporate more modern functionality. 

---

## Features
* [View Recipes](#View-Recipes)
* [Search Recipes](#Search-Recipes)
* [Filter Recipes](#Filter-Recipes)
* [Favorite Recipes](#Favorite-Recipes)
* [Pantry](#Pantry)
* [Recipes](#Recipes)


#### View Recipes
When the page is first opened, the user sees all of the available recipes on the page in little cards. 
<p align = "center">
<img src="https://user-images.githubusercontent.com/70095063/104495280-cf843180-5594-11eb-92a0-920539490dbb.png" width="900" height="auto">
<!-- <blockquote class="imgur-embed-pub" lang="en" data-id="a/CCHCRQU" data-context="false" ><a href="//imgur.com/a/CCHCRQU"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script> -->
</p>
    <details>
      <summary>Under the Hood</summary>
      The recipes are created by using `fetch` to request recipe data and then displayed on cards that are created in the DOM. 
    </details>

#### Search Recipes
You'll find all of the recipes you need here, but that can be a lot to handle, so we got a search bar, baby! Just type in a recipe name or ingredient, and we'll find everything that suits your needs.  
<p align = "center">
<img src="https://media.giphy.com/media/94qT4z80QExCPprrmX/giphy.gif">
</p>
    <details>
      <summary>Under the Hood</summary>
      When the user starts to type into the search bar, the recipes are filtered first by name and then by ingredient. The recipes that do not match the search criteria are then hidden from view.
    </details>
    
#### Filter Recipes 
Another way to narrow down your recipe selection is to use the filter feature. On the left side, select a type of recipe to display, then click "Filter Recipes", and you'll only see the recipes that fit those tags. 
<p align = "center">
<img src="https://media.giphy.com/media/rgOW0YRZdT9V32XzVy/giphy.gif">
</p>
    <details>
      <summary>Under the Hood</summary>
      When the user selects a tag and presses the button, all of the recipes whose tags do NOT include the selected tag/s are hidden from the page. When the user selects more than one tag, the recipe's tags must include ALL of the selected tags to not be hidden. 
    </details>
    
#### Favorite Recipes 
Users can save their recipes to a list of favorites. In the bottom, right corner of each card is a little outline of a granny smith. If a user is digging a recipe, they can click that apple and it will be added to their favorites. In the top, right side of the page, the user can click on the "My Recipes" button and see all of their saved recipes. Those recipes can also be filtered and searched. 
<p align = "center">
<img src="https://media.giphy.com/media/8J8SBaqrNxbPz8jla8/giphy.gif">
</p>
    <details>
      <summary>Under the Hood</summary>
      When the user selects the apple icon, the card element's class is updated. Then, when the user clicks "My Recipes", the main section's class is updated to only display the cards with the favorited class. 
    </details>
   
#### Pantry
The user can also keep track of their pantry with this app. In the top, right corner, the user can select the "My Pantry" button to see all of the ingredients that they have in their cupboard to help decide what recipes they want to make. 
<p align = "center">
<img src="https://media.giphy.com/media/6hPk6pvU7ZBH9BJFRn/giphy.gif">
</p>
    <details>
      <summary>Under the Hood</summary>
      The pantry displays from the User instance's pantry property.
    </details>

#### Recipes
When the user selects a recipe card, the recipe expands to show the list of ingredients and instructions for making the recipe. The page will let a user know if their pantry has the necessary ingredients to cook this recipe and gives them a shopping list for the ingredients they might need. 
<p align = "center">
<img src="https://media.giphy.com/media/ELG5rt7fx4SgS7SkDv/giphy.gif">
</p>
<br>

When the user has done their shopping, they can click the "Add Items to Pantry" button. If the user has all of the necessary ingredients in their pantry, they can click the "Cook Recipe" button, and those ingredients will be removed from their pantry. The user can also see when they cooked that recipe last. 
<p align = "center">
<img src="https://media.giphy.com/media/eSrlmC6rIqMrdoyDoz/giphy.gif">
</p>
    <details>
      <summary>Under the Hood</summary>
      When the recipe card is selected, the recipe modal is displayed and brought to the front/top, disabling all of the functionality behind/under it. The list of ingredients and instructions are displayed form the Recipe instance. The user's pantry is checked for all of the Recipe's ingredients and displays whether the user has the ingredients to make the recipe.
    <br>
    <br>
    If the user has the required ingredients, they can click the "Cook Recipe" button and the User's pantry will be uodated using a a Fetch POST to remove the ingredients. If the user does not have the necessary ingredients, they can click the "Add Items to Pantry" button and the User's pantry will be updated using a Fetch POST to add the ingredients.
    <br>
    <br>
    When the user decides to cook a recipe, the Recipe is added to the User's cookedRecipes property. If the user has cooked the recipe before and it already exists in that property, then the Recipe is not added, but the date is updated. 
    </details>

#### Continuous Improvement/Future Improvements
- Check for duplicate ingredients in the API before being added to the classes
- Improve mobile responsive design so that the Recipe Type filter sidebar is shown/hidden on click
- Select individual items to add to the pantry
- Functionality to select the displayed user through a dropdown form or some other means
---

## Technologies
JS, Fetch/Async, JSON, Mocha, Chai, HTML, CSS/SCSS, Normalize, Webpack

## Deployment
This app requires a local server to be running independent of GH. Clone down [this repo](https://github.com/turingschool-examples/whats-cookin-api) and follow the instructions in the README. Once the server is running on your local machine, the site can be seen in all of it's glory here: 

[Deployment Link](alia-peterson.github.io/whats-cooking/dist/index.html)

## Authors
<table>
    <tr>
        <td> Alia Peterson <a href="https://github.com/alia-peterson">GH</td>
        <td> Tashia Davis <a href="https://github.com/tashiad">GH</td>
        <td> Richard Tyler <a href="https://github.com/richardltyler">GH</td>
    </tr>
<td><img src="https://avatars3.githubusercontent.com/u/70297733?s=400&u=f7e7c3682b498a90f005565b56b38a8ac985b053&v=4" alt="Ms. Peterson"
 width="150" height="auto" /></td>
 <td><img src="https://avatars3.githubusercontent.com/u/66852774?s=400&v=4" alt="Ms. Davis"
 width="150" height="auto" /></td>
 <td><img src="https://avatars3.githubusercontent.com/u/70095063?s=460&u=39c274f1a2fbb88cc013de61aa8307596a988255&v=4" alt="Mr. Tyler"
 width="150" height="auto" /></td>
</table>

