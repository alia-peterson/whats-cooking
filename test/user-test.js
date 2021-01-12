import { expect } from 'chai'

import User from '../src/user'
import data from '../src/data/users-data'

import ingredientsData from '../src/data/ingredient-data'

describe.only('User', function() {
  let user
  let userInfo
  let recipe
  let ingredientList

  beforeEach(function() {
    userInfo = data[0]
    user = new User(userInfo)

    recipe = {name: 'Chicken Parm', type: ['italian', 'dinner']}

    ingredientList = ingredientsData
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

  it('should be able to filter recipes by type', function() {
    user.saveRecipe(recipe)
    expect(user.filterRecipes('italian')).to.deep.equal([recipe])
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
})
