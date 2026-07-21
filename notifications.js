// Arisudan Trucks Notification Manager

class NotificationManager {

constructor(){

this.permission=false;

}

async init(){

if("Notification" in window){

const result=await Notification.requestPermission();

this.permission=result==="granted";

}

}

show(title,message){

if(this.permission){

new Notification(title,{
body:message,
icon:"icon-192.png",
badge:"icon-192.png"
});

}else{

console.log(title+" : "+message);

}

}

bookingCreated(id){

this.show(
"Booking Confirmed",
"Your booking "+id+" has been created successfully."
);

}

driverAssigned(name){

this.show(
"Driver Assigned",
name+" has been assigned to your booking."
);

}

tripStarted(){

this.show(
"Trip Started",
"Your shipment is now in transit."
);

}

tripCompleted(){

this.show(
"Trip Completed",
"Your delivery has been completed successfully."
);

}

paymentReceived(amount){

this.show(
"Payment Successful",
"₹"+amount+" received successfully."
);

}

}

const Notify=new NotificationManager();

Notify.init();

export default Notify;
