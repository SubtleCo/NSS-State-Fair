const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", e => {
    if (e.target.id === "ridesTicket") {
        const cE = new CustomEvent("ridesTicketPurchased", {
            detail: {
                ticket: e.target.id
            }
        })
        eventHub.dispatchEvent(cE)
    }
})

eventHub.addEventListener("click", e => {
    if (e.target.id === "foodTicket") {
        const cE = new CustomEvent("foodTicketPurchased", {
            detail: {
                ticket: e.target.id
            }
        })
        eventHub.dispatchEvent(cE);
    }
})

eventHub.addEventListener("click", e => {
    if (e.target.id === "gamesTicket") {
        const cE = new CustomEvent("gamesTicketPurchased", {
            detail: {
                ticket: e.target.id
            }
        })
        eventHub.dispatchEvent(cE);
    }
})

eventHub.addEventListener("click", e => {
    if (e.target.id === "sideshowTicket") {
        const cE = new CustomEvent("sideshowTicketPurchased", {
            detail: {
                ticket: e.target.id
            }
        })
        eventHub.dispatchEvent(cE);
    }
})



export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="ridesTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gamesTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
        </div>
    `
}

