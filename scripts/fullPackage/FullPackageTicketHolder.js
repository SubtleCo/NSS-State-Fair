const eventHub = document.querySelector("#state-fair")

export const FullPackageTicketHolder = () => {
    eventHub.addEventListener("fullPackageTicketPurchased", e => {
        
        const addFullPackageTicket = (destination) => {
             destination.innerHTML += `
             <div class="person bigSpender"></div>`
        }
        addFullPackageTicket(document.querySelector(".food"))
        addFullPackageTicket(document.querySelector(".rides"))
        addFullPackageTicket(document.querySelector(".games"))
        addFullPackageTicket(document.querySelector(".sideshow"))
    })
}