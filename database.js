// Arisudan Trucks Database Manager

class Database {

constructor(){

this.users=JSON.parse(localStorage.getItem("users"))||[];

this.bookings=JSON.parse(localStorage.getItem("bookings"))||[];

this.vehicles=JSON.parse(localStorage.getItem("vehicles"))||[];

this.drivers=JSON.parse(localStorage.getItem("drivers"))||[];

}

// USERS

saveUser(user){

this.users.push(user);

localStorage.setItem("users",JSON.stringify(this.users));

}

getUsers(){

return this.users;

}

// BOOKINGS

saveBooking(booking){

this.bookings.push(booking);

localStorage.setItem("bookings",JSON.stringify(this.bookings));

}

getBookings(){

return this.bookings;

}

updateBooking(id,status){

this.bookings=this.bookings.map(item=>{

if(item.id===id){

item.status=status;

}

return item;

});

localStorage.setItem("bookings",JSON.stringify(this.bookings));

}

// VEHICLES

addVehicle(vehicle){

this.vehicles.push(vehicle);

localStorage.setItem("vehicles",JSON.stringify(this.vehicles));

}

getVehicles(){

return this.vehicles;

}

// DRIVERS

addDriver(driver){

this.drivers.push(driver);

localStorage.setItem("drivers",JSON.stringify(this.drivers));

}

getDrivers(){

return this.drivers;

}

approveDriver(id){

this.drivers=this.drivers.map(driver=>{

if(driver.id===id){

driver.approved=true;

}

return driver;

});

localStorage.setItem("drivers",JSON.stringify(this.drivers));

}

// DASHBOARD

getDashboard(){

return{

users:this.users.length,

drivers:this.drivers.length,

vehicles:this.vehicles.length,

bookings:this.bookings.length,

revenue:this.bookings.reduce((sum,item)=>sum+(item.total||0),0)

};

}

}

const DB=new Database();

export default DB;
