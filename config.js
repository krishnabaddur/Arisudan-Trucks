// Arisudan Trucks Configuration

const CONFIG = {

APP_NAME: "Arisudan Trucks",

VERSION: "1.0.0",

OWNER: "Arisudan Trucks",

SUPPORT_EMAIL: "support@arisudantrucks.in",

SUPPORT_PHONE: "9900697995",

BASE_RATE: {

THREE_WHEELER: 600,

MINI_TRUCK: 1000,

TRUCK_5_TON: 2500

},

PER_KM_RATE: 25,

BOOKING_STATUS: [

"Booked",

"Driver Assigned",

"Picked Up",

"In Transit",

"Delivered"

],

USER_ROLES: [

"Customer",

"Driver",

"Admin"

],

PAYMENT_METHODS: [

"UPI",

"Cash",

"Card"

],

THEME:{

PRIMARY:"#FFD700",

SECONDARY:"#111827",

SUCCESS:"#22c55e",

DANGER:"#ef4444",

INFO:"#2563eb"

}

};

export default CONFIG;
