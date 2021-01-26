const eventHub = document.querySelector("#state-fair")

export const GameTicketHolder = () => {
    eventHub.addEventListener("gamesTicketPurchased", e => {
        const targetElement = document.querySelector(".games")
         targetElement.innerHTML += `
         <div class="person player"></div>`
    })
}