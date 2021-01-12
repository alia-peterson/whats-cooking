import { expect } from 'chai'

import Recipe from '../src/recipe'
import data from '../src/data/recipe-data'

import ingredientsData from '../src/data/ingredient-data'

describe('Recipe', function() {
  let recipe
  let recipeInfo
  let recipe2Info
  let recipe2
  let ingredients

  beforeEach(function() {
    recipeInfo = data[0]
    recipe2Info = data[2]
    recipe = new Recipe(recipeInfo)
    recipe2 = new Recipe(recipe2Info)
    ingredients = ingredientsData
  })

  it('is a function', function() {
    expect(Recipe).to.be.a('function')
  })

  it('should be an instance of Recipe', function() {
    expect(recipe).to.be.an.instanceof(Recipe)
  })

  it('should initialize with an id', function() {
    expect(recipe.id).to.eq(595736)
  })

  it('should initialize with an name', function() {
    expect(recipe.name).to.eq('Loaded Chocolate Chip Pudding Cookie Cups')
  })

  it('should initialize with an image', function() {
    expect(recipe.image).to.eq('https://spoonacular.com/recipeImages/595736-556x370.jpg')
  })

  it('should initialize with an array of ingredients', function() {
    expect(recipe.ingredients).to.deep.eq(data[0].ingredients)
  })

  it('should initialize with ingredients that do not have costs', function() {
    const cost = recipe.ingredients[0].cost
    expect(cost).to.be.undefined
  })

  it('should add a name to each ingredient', function() {
    recipe.updateIngredientsInfo(ingredients)

    const ingredientName = ingredients[0].name
    expect(recipe.ingredients[0].name).to.equal(ingredientName)
  })

  it('should add a cost to each ingredient', function() {
    recipe.updateIngredientsInfo(ingredients)

    const ingredientCost = ingredients[0].estimatedCostInCents
    expect(recipe.ingredients[0].cost).to.equal(ingredientCost)
  })

  it('should format recipe names that are too long', function() {
    const newName = recipe.formatName()
    expect(newName).to.equal('Loaded Chocolate Chip Pudding Cookie Cup...')
  })

  it('should not format names that are under 40 characters', function() {
    const formattedName = recipe2.formatName()
    expect(formattedName).to.equal(recipe2.name)
  })
})
