const eventHub = document.querySelector("#state-fair")

export const SideshowTicketHolder = () => {
    eventHub.addEventListener("sideshowTicketPurchased", e => {
        const targetElement = document.querySelector(".sideshow")
         targetElement.innerHTML += `
         <div class="person gawker"></div>`
    })
}