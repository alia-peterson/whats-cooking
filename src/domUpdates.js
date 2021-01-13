const recipeContainer = document.querySelector(".recipe--container")
const bannerText = document.querySelector(".banner--message")
const recipeTagList = document.querySelector(".list-tags")
const pantryList = document.querySelector(".table-pantry")
const cardTemplate = document.querySelector('#template--card')
const instructionsCard = document.querySelector('.recipe--instructions')
const modalShoppingMessage = document.querySelector('#modal--message-ingredients')
const modalShoppingList = document.querySelector('.modal--shopping-list')
const modalShoppingItems = document.querySelector('.modal--shopping-items')
const modalTotalCost = document.querySelector('.modal--total-cost')

let domUpdates = {
  addWelcomeMessage(firstName) {
    bannerText.innerText = `Welcome ${firstName}!`
  },

  addCardToDom(recipeInfo, shortRecipeName) {
    const newRecipeCard = cardTemplate.content.cloneNode(true)
    newRecipeCard.querySelector('article.recipe--card').id = recipeInfo.id
    newRecipeCard.querySelector('h4.recipe--title').innerText = shortRecipeName
    newRecipeCard.querySelector('img.recipe--photo').src = recipeInfo.image
    newRecipeCard.querySelector('img.recipe--photo').alt = recipeInfo.name
    newRecipeCard.querySelector('img.recipe--photo').title = `${recipeInfo.name} recipe`

    this.displayTags(recipeInfo.tags, newRecipeCard)
    recipeContainer.appendChild(newRecipeCard)
  },

  displayTags(tags, card) {
    const listSection = card.querySelector('p.recipe--tags')
    tags.forEach(tag => {
      const newTagElement = document.createElement('span')
      newTagElement.innerText = `${tag}`
      listSection.appendChild(newTagElement)
    })
  },

  addListTags(allTags) {
    allTags.forEach(tag => {
      let tagHtml = `<li><input type="checkbox" class="checked-tag" id="${tag}">
        <label for="${tag}">${this.capitalize(tag)}</label></li>`
      recipeTagList.insertAdjacentHTML("beforeend", tagHtml)
    })
  },

  displayShoppingList(shoppingList) {
    modalShoppingMessage.style.display = 'none'
    modalShoppingList.style.display = 'block'
    shoppingList.forEach(shoppingItem => {
      const listItem = document.createElement('tr')
      const itemName = document.createElement('td')
      const itemQuantity = document.createElement('td')
      const itemCostPerUnit = document.createElement('td')
      const itemTotalCost = document.createElement('td')

      const unit = this.formatUnits(shoppingItem.unit)
      const totalCost = this.formatPrice((shoppingItem.cost *
        shoppingItem.quantity) / 100)

      itemName.innerText = shoppingItem.name
      itemQuantity.innerText = `${shoppingItem.quantity} ${unit}`
      itemCostPerUnit.innerText = `$${this.formatPrice(shoppingItem.cost / 100)}`
      itemTotalCost.innerText = `$${totalCost}`

      itemCostPerUnit.classList.add('price')
      itemTotalCost.classList.add('price')

      modalShoppingItems.appendChild(listItem)
      listItem.appendChild(itemName)
      listItem.appendChild(itemQuantity)
      listItem.appendChild(itemCostPerUnit)
      listItem.appendChild(itemTotalCost)
    })

    this.displayTotalCost(shoppingList)
  },

  displayTotalCost(shoppingList) {
    let totalListCost = shoppingList.reduce((totalCost, item) => {
      totalCost += (item.cost * item.quantity) / 100
      return totalCost
    }, 0)

    totalListCost = this.formatPrice(totalListCost)
    modalTotalCost.innerHTML = `
      <tr>
        <td colspan="4" class="price">Total Cost: $${totalListCost}</td>
      <tr>`
  },

  formatUnits(unit) {
    if (unit.toLowerCase().includes('teaspoon')) {
      unit = 'tsp'
    } else if (unit.toLowerCase().includes('tablespoon')) {
      unit = 'Tbsp'
    }
    return unit
  },

  formatQuantity(quantity) {
    if (quantity.toString().length > 3) {
      quantity = quantity.toFixed(2)
    }

    return quantity
  },

  formatPrice(quantity) {
    const format = (num, decimals) => num.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

    quantity = format(quantity)
    return quantity
  },

  generateRecipeInstructions(recipe) {
    instructionsCard.querySelector('h3').innerText = recipe.name
    instructionsCard.querySelector('h3').style.backgroundImage = `url(${recipe.image})`

    recipe.instructions.forEach(step => {
      const nextStep = document.createElement('li')
      nextStep.innerText = step.instruction
      instructionsCard.querySelector('ol').appendChild(nextStep)
    })

    instructionsCard.style.display = 'inline'
  },

  generateRecipeIngredients(recipe) {
    recipe.ingredients.forEach(i => {
      const currentIngredient = document.createElement('li')
      const quantity = domUpdates.formatQuantity(i.quantity.amount)
      const unit = domUpdates.formatUnits(i.quantity.unit)

      const ingFormat = `${quantity} ${unit} ${domUpdates.lowerCase(i.name)}`
      currentIngredient.innerText = ingFormat
      instructionsCard.querySelector('ul').appendChild(currentIngredient)
    })
  },

  addPantryInfoToDom(pantry) {
    this.clearPantryContents()
    pantry.forEach(item => {
      const listItem = document.createElement('tr')
      const itemName = document.createElement('td')
      const itemQuantity = document.createElement('td')

      itemName.innerText = item.name
      itemQuantity.innerText = item.amount

      itemQuantity.classList.add('amount')

      pantryList.appendChild(listItem)
      listItem.appendChild(itemName)
      listItem.appendChild(itemQuantity)
    })
  },

  createListElements(instructions) {
    let instructionsList = ''
    instructions.forEach(item => {
      instructionsList += `<li>${item}</li>`
    })
    return instructionsList
  },

  // can probably rework these to be dynamic since they're so similar?
  clearPantryContents() {
    pantryList.querySelectorAll('tr').forEach(tr => tr.remove())
  },

  clearShoppingList() {
    modalShoppingList.style.display = 'none'
    modalShoppingItems.querySelectorAll('tr').forEach(tr => tr.remove())
  },

  clearRecipeInstructions() {
    instructionsCard.querySelectorAll('li').forEach(li => li.remove())
  },

  capitalize(words) {
    return words.split(" ").map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(" ")
  },

  lowerCase(words) {
    return words.split(" ").map(word => {
      return word.charAt(0).toLowerCase() + word.slice(1)
    }).join(" ")
  }
}


export default domUpdates
