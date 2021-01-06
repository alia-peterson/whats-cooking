let bannerText = document.querySelector(".banner-image")


let domUpdates = {
  addWelcomeMessage(firstName) {
    let welcomeMsg = `
      <div class="welcome-msg">
        <h1>Welcome ${firstName}!</h1>
      </div>`
    bannerText.insertAdjacentHTML("afterbegin", welcomeMsg)
  }
}


export default domUpdates
