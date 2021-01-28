const targetElement = document.querySelector('.ticketCounter')
const eventHub = document.querySelector('#state-fair')

let ticketsPurchased = 0

export const listenForTickets = (buttonEvent) => {
    eventHub.addEventListener(buttonEvent, e => {
        ticketsPurchased++
        render(ticketsPurchased)
    })    
}

const render = tickets => {
    targetElement.innerHTML = `Total tickets Purchased: ${tickets}`
}

listenForTickets("ridesTicketPurchased")
listenForTickets("foodTicketPurchased")
listenForTickets("gamesTicketPurchased")
listenForTickets("sideshowTicketPurchased")
listenForTickets("fullPackageTicketPurchased")