import { expect } from 'chai'

import User from '../src/user'
import data from '../src/data/users-data'

import ingredientsData from '../src/data/ingredient-data'

describe.only('User', function() {
  let user
  let userInfo
  let recipe
  let ingredientList
  let today
  let recipe2

  beforeEach(function() {
    userInfo = data[0]
    user = new User(userInfo)

    recipe = {id: 0, name: 'Chicken Parm', type: ['italian', 'dinner']}

    ingredientList = ingredientsData

    today = new Date(Date.now())

    recipe2 = {
      id: recipe.id,
      date: today
    }

    user.saveCookedRecipe(recipe.id, today)
  })

  it('should be a function', function() {
    expect(User).to.be.a('function')
  })

  it('should initialize with an id', function() {
    expect(user.id).to.eq(1)
  })

  it('should initialize with a name', function() {
    expect(user.name).to.eq('Saige O\'Kon')
  })

  it('should initialize with a pantry', function() {
    expect(user.pantry[0].ingredient).to.eq(11477)
  })

  it('should initialize with an empty favoriteRecipes array', function() {
    expect(user.favoriteRecipes).to.deep.equal([])
  })

  it('should be able to save a recipe to favoriteRecipes', function() {
    user.saveRecipe(recipe)
    expect(user.favoriteRecipes[0].name).to.equal('Chicken Parm')
  })

  it('should initialize with pantry ingredients without names', function() {
    expect(user.pantry[0].name).to.be.undefined
  })

  it('should add names to pantry ingredients', function() {
    user.addPantryIngredientNames(ingredientList)
    expect(user.pantry[0].name).to.equal('zucchini squash')
  })

  it('should alphabatize the pantry after the names have been added', function() {
    user.addPantryIngredientNames(ingredientList)

    const sortedPantry = user.alphabetizePantry()
    expect(sortedPantry[0].name).to.equal('almondmilk')
  })

  it('should save a cooked recipe', function() {
    expect(user.cookedRecipes).deep.equal([recipe2])
  })

  it('should update the date if the recipe has previously been cooked', function() {
    expect(user.cookedRecipes).deep.equal([recipe2])
    
    const secondTimeCooked = new Date(Date.now())
    user.saveCookedRecipe(recipe.id, secondTimeCooked)

    expect(user.cookedRecipes).deep.equal([recipe2])
  })

  it('should find a recipe that has been cooked', function() {
    const cookedRecipe = user.findCookedRecipe(recipe.id)

    expect(cookedRecipe).to.deep.equal(user.cookedRecipes[0])
  })

  it('should find the date that a recipe was last cooked', function() {
    const lastCookedDate = user.findCookedDate(recipe.id)

    expect(lastCookedDate).equal(today)
  })

  it('should not return a recipe if that recipe has not been cooked', function() {
    const lastCookedDate = user.findCookedDate(45)

    expect(lastCookedDate).to.be.undefined
  })
})
