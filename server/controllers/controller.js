const services = require("../services")

 function addSales(req, res, next){
   services.addSales(req.body)
   .then(() => res.json({
    message: `sales of ${req.body.amount} was added`
}))
.catch(err => {
    next(err)
});
}

async function getSalesByStatus(req, res, next){
    services.getSalesByStatus(req.params.status)
        .then(sale => sale ? res.json(sale) : res.sendStatus(404))
        .catch(err => next(err));
}

module.exports = {
    addSales,
    getSalesByStatus
}