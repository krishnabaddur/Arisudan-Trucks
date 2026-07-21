// Arisudan Trucks
// Main Application

const App = {

init() {

console.log("Arisudan Trucks Started");

this.loadBookings();

},

saveBooking(booking){

let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

bookings.push(booking);

localStorage.setItem("bookings",JSON.stringify(bookings));

},

loadBookings(){

let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

console.log(bookings);

},

calculateFare(vehicle,distance){

const rates={

"3 Wheeler":600,

"Mini Truck":1000,

"Truck":2500

};

return (rates[vehicle]||400)+(distance*25);

},

createBooking(){

const booking={

id:"AT"+Date.now(),

customer:"Customer",

pickup:"",

drop:"",

vehicle:"",

distance:0,

fare:0,

status:"Booked",

date:new Date().toLocaleString()

};

return booking;

}

};

document.addEventListener("DOMContentLoaded",()=>{

App.init();

});
