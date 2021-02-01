const Sales  = require('../models/');
async function addSales(NewSales){
    if(!NewSales.userName && !NewSales.amount ){
        throw "username and amount required";
    } else {
     return await Sales.create({
       userName: NewSales.userName,
       amount: NewSales.amount,
       date: NewSales.date
   })
}
}

async function getSalesByStatus(){
    const sale  = await  Sales.findAll({
    })
}

module.exports = {
    addSales,
    getSalesByStatus
}