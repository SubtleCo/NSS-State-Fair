const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolder = () => {
    eventHub.addEventListener("foodTicketPurchased", e => {
        const targetElement = document.querySelector(".food")
         targetElement.innerHTML += `
         <div class="person eater"></div>`
    })
}