const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", e => {
        const targetElement = document.querySelector(".rides")
         targetElement.innerHTML += `
         <div class="person rider"></div>`
    })
}