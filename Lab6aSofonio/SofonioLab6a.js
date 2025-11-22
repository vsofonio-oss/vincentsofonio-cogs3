// Table Planner
var guests = prompt("How many guests?");
var tables = prompt("How many tables?");

var baseGuests = Math.floor(guests/tables);
var extraTables = guests % tables;
var normalTables = tables - extraTables;

var message = "Your " + guests + " guests will be seated as such: ";

if (extraTables == 0) {

    message = message + tables + " table";
    if (tables > 1) {
        message = message + "s";
    }
    message = message + " of " + baseGuests;
}
else {
    message = message + extraTables + " table";
    if (extraTables > 1) {
        message = message + "s";
    }
    message = message + " of " + (baseGuests + 1);

    if (normalTables > 0) {
        message = message + ", and " + normalTables + " table";
        if (normalTables > 1) {
            message = message + "s";
        }
        message = message + " of " + baseGuests;
    }
}

alert(message);