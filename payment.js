// Arisudan Trucks Payment Module

class PaymentManager {

constructor(){

this.history=JSON.parse(localStorage.getItem("payments"))||[];

}

payUPI(amount){

const payment={

id:"PAY"+Date.now(),

method:"UPI",

amount:amount,

status:"Success",

date:new Date().toLocaleString()

};

this.history.push(payment);

this.save();

alert("UPI Payment Successful");

return payment;

}

payCash(amount){

const payment={

id:"PAY"+Date.now(),

method:"Cash",

amount:amount,

status:"Pending",

date:new Date().toLocaleString()

};

this.history.push(payment);

this.save();

alert("Cash Payment Selected");

return payment;

}

payCard(amount){

const payment={

id:"PAY"+Date.now(),

method:"Card",

amount:amount,

status:"Success",

date:new Date().toLocaleString()

};

this.history.push(payment);

this.save();

alert("Card Payment Successful");

return payment;

}

save(){

localStorage.setItem("payments",JSON.stringify(this.history));

}

getPayments(){

return this.history;

}

totalRevenue(){

return this.history.reduce((sum,p)=>sum+p.amount,0);

}

generateInvoice(payment){

return {

invoice:"INV"+payment.id,

paymentId:payment.id,

amount:payment.amount,

method:payment.method,

status:payment.status,

date:payment.date

};

}

}

const Payment=new PaymentManager();

export default Payment;
