// import './scripts'

const main = document.querySelector(".container")
const bannerText = document.querySelector(".banner--message")
const recipeTagList = document.querySelector(".list-tags")
const pantryList = document.querySelector(".table-pantry")
const cardTemplate = document.querySelector('#template--card')
const instructionsCard = document.querySelector('.recipe--instructions')
const modalShoppingMessageYes = document.querySelector('#modal--shopping-message-yes')
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
    newRecipeCard.querySelector('h3.recipe--title').innerText = shortRecipeName
    newRecipeCard.querySelector('img.recipe--photo').src = recipeInfo.image
    newRecipeCard.querySelector('img.recipe--photo').alt = recipeInfo.name
    newRecipeCard.querySelector('img.recipe--photo').title = `${recipeInfo.name} recipe`

    this.displayTags(recipeInfo.tags, newRecipeCard)
    main.appendChild(newRecipeCard)
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
    modalShoppingMessageYes.style.display = 'none'
    modalShoppingList.style.display = 'block'
    shoppingList.forEach(shoppingItem => {
      const listItem = document.createElement('tr')
      const itemName = document.createElement('td')
      const itemQuantity = document.createElement('td')
      const itemCostPerUnit = document.createElement('td')
      const itemTotalCost = document.createElement('td')
      let unit = this.formatUnits(shoppingItem.unit)
      let totalCost = (shoppingItem.cost * shoppingItem.quantity)/100

      itemName.innerText = shoppingItem.name
      itemQuantity.innerText = `${shoppingItem.quantity} ${unit}`
      itemCostPerUnit.innerText = `$${shoppingItem.cost/100}`
      itemTotalCost.innerText = `$${totalCost.toFixed(2)}`

      itemCostPerUnit.classList.add("price")
      itemTotalCost.classList.add("price")

      modalShoppingItems.appendChild(listItem)
      listItem.appendChild(itemName)
      listItem.appendChild(itemQuantity)
      listItem.appendChild(itemCostPerUnit)
      listItem.appendChild(itemTotalCost)
    })

    this.displayTotalCost(shoppingList)
  },

  displayTotalCost(shoppingList) {
    const totalListCost = shoppingList.reduce((totalCost, item) => {
      totalCost += (item.cost * item.quantity) / 100
      return totalCost
    }, 0)

    modalTotalCost.innerHTML = `
        <tr>
          <td colspan="4" class="price">Total Cost: $${totalListCost.toFixed(2)}</td>
        <tr>`
  },

  formatUnits(unit) {
    if (unit === "teaspoons" || unit === "teaspoon") {
      unit = "tsp"
    } else if (unit === "Tablespoons" || unit === "tablespoons" || unit === "tablespoon") {
      unit = "Tbsp"
    }
    return unit
  },

  formatQuantity(quantity) {
    if (quantity.toString().length > 3) {
      quantity = quantity.toFixed(2)
    }
    return quantity
  },

  clearShoppingList() {
    modalShoppingItems.querySelectorAll('tr').forEach(tr => tr.remove())
  },

  generateRecipeInstructions(recipe, ingredients) {
    instructionsCard.querySelector('h3').innerText = recipe.name
    instructionsCard.querySelector('h3').style.backgroundImage = `url(${recipe.image})`
    instructionsCard.querySelector('p').innerText = ingredients

    recipe.instructions.forEach(step => {
      const nextStep = document.createElement('li')
      nextStep.innerText = step.instruction
      instructionsCard.querySelector('ol').appendChild(nextStep)
    })

    instructionsCard.style.display = 'inline'
  },

  clearRecipeInstructions() {
    instructionsCard.querySelectorAll('li').forEach(li => li.remove())
  },

  addPantryInfo(pantry) {
    pantry.forEach(item => {
      const listItem = document.createElement('tr')
      const itemName = document.createElement('td')
      const itemQuantity = document.createElement('td')

      itemName.innerText = item.name
      itemQuantity.innerText = item.amount

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

  capitalize(words) {
    return words.split(" ").map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  },

  lowerCase(words) {
    return words.split(" ").map(word => {
      return word.charAt(0).toLowerCase() + word.slice(1);
    }).join(" ");
  }
}


export default domUpdates
