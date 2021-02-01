const Sales  = require('../models/').Sales  ;
async function addSales(NewSales){
    if(!NewSales.userName && !NewSales.amount ){
        throw "username and amount required";
    }
   const Item =  await Sales.create({
       userName: NewSales.userName,
       amount: NewSales.amount,
       date: NewSales.date
   })
   return Item;
}

async function getSalesByStatus(){
    
}

module.exports = {
    addSales,
    getSalesByStatus
}