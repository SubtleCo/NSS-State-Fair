// Import and invoke the ticket booth component function

import { FoodTicketHolder } from "./food/FoodTicketHolder.js";
import { RidesTicketHolder } from "./rides/RidesTicketHolder.js";
import { GameTicketHolder } from "./games/GameTicketHolder.js";
import { TicketBooth } from "./TicketBooth.js";
import { SideshowTicketHolder } from "./sideshows/SideshowsTicketHolder.js";
import { FullPackageTicketHolder } from "./fullPackage/FullPackageTicketHolder.js";
import { listenForTickets } from "./TicketCounter.js";
TicketBooth();
RidesTicketHolder();
FoodTicketHolder();
GameTicketHolder();
SideshowTicketHolder();
FullPackageTicketHolder();
listenForTickets();