const eventHub = document.querySelector("#state-fair")

export const RidesTicketHolder = () => {
    eventHub.addEventListener("ridesTicketPurchased", e => {
        const targetElement = document.querySelector(".rides")
         targetElement.innerHTML += `
         <div class="person rider"></div>`
    })
}