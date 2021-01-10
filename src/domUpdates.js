// import './scripts'

const main = document.querySelector(".container")
const bannerText = document.querySelector(".banner--message")
const recipeTagList = document.querySelector(".list-tags")
const pantryList = document.querySelector(".table-pantry")
const cardTemplate = document.querySelector('#template--card')
const instructionsCard = document.querySelector('.recipe--instructions')
const modalShoppingMessage = document.querySelector('#modal--shopping-message')
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
    modalShoppingMessage.innerText = `You don't have enough ingredients in your pantry to make this recipe! Here's what you need:`
    modalShoppingList.style.display = 'block'
    shoppingList.forEach(shoppingItem => {
      const listItem = document.createElement('tr')
      const itemName = document.createElement('td')
      const itemQuantity = document.createElement('td')
      const itemCostPerUnit = document.createElement('td')
      const itemTotalCost = document.createElement('td')

      itemName.innerText = shoppingItem.name
      itemQuantity.innerText = `${shoppingItem.quantity} ${shoppingItem.unit}`
      itemCostPerUnit.innerText = `$${shoppingItem.cost/100}`
      itemTotalCost.innerText = `$${(shoppingItem.cost * shoppingItem.quantity)/100}`

      modalShoppingItems.appendChild(listItem)
      listItem.appendChild(itemName)
      listItem.appendChild(itemQuantity)
      listItem.appendChild(itemCostPerUnit)
      listItem.appendChild(itemTotalCost)
    })

    const totalListCost = shoppingList.reduce((totalCost, item) => {
      totalCost += (item.cost * item.quantity)/100
      return totalCost
    }, 0)

    modalTotalCost.innerText = `Total List Cost: $${totalListCost.toFixed(2)}`
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
