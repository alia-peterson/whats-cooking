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


#### View Recipes
When the page is first opened, the user sees all of the available recipes on the page in little cards. 
<p align = "center">
<img src="https://lwgsummerland.files.wordpress.com/2013/06/sexyvegeman.jpg">
</p>
    <details>
      <summary>Under the Hood</summary>
      The recipes are created by using `fetch` to request recipe data and then displayed on cards that are created in the DOM. 
    </details>



#### Search Recipes
You'll find all of the recipes you need here, but that can be a lot to handle, so we got a search bar, baby! Just type in a recipe name or ingredient, and we'll find everything that suits your needs.  
<p align = "center">
<img src="">
</p>
    <details>
      <summary>Under the Hood</summary>
      Everytime a user types into the search bar, the recipes are filtered by their name for recipes that do not meet the search criteria. Then those unmatching recipes are filtered for recipes whose ingredients do not include the search criteria. Then the recipes whose names and ingredients do not meet the search criteria are hidden from the DOM
    </details>
    
#### Filter Recipes 



#### Continuous Improvement/Future Improvements

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

