// Arisudan Trucks Maps Module

class MapsManager {

constructor(){

this.pickup=null;
this.drop=null;
this.driver=null;

}

init(){

console.log("Maps Loaded");

}

setPickup(lat,lng){

this.pickup={
lat:lat,
lng:lng
};

}

setDrop(lat,lng){

this.drop={
lat:lat,
lng:lng
};

}

setDriver(lat,lng){

this.driver={
lat:lat,
lng:lng
};

}

getPickup(){

return this.pickup;

}

getDrop(){

return this.drop;

}

getDriver(){

return this.driver;

}

calculateDistance(lat1,lon1,lat2,lon2){

const R=6371;

const dLat=(lat2-lat1)*Math.PI/180;

const dLon=(lon2-lon1)*Math.PI/180;

const a=
Math.sin(dLat/2)*Math.sin(dLat/2)+
Math.cos(lat1*Math.PI/180)*
Math.cos(lat2*Math.PI/180)*
Math.sin(dLon/2)*
Math.sin(dLon/2);

const c=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));

return (R*c).toFixed(2);

}

estimateFare(vehicle,distance){

const rates={

"3 Wheeler":400,

"Mini Truck":800,

"Truck":1500

};

return (rates[vehicle]||400)+(distance*25);

}

driverReached(){

return "Driver Reached Pickup Location";

}

tripStarted(){

return "Trip Started";

}

tripCompleted(){

return "Trip Completed";

}

}

const Maps=new MapsManager();

export default Maps;
