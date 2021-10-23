var dbConn = require('../../config/db.config');

var Sale = function(sale){
    this.id_sale = sale.id_sale;
    this.total_value = sale.total_value;
    this.id_product = sale.id_product;    
    this.amount = sale.amount;
    this.unit_price = sale.unit_price;
    this.date = sale.date;
    this.id_client = sale.id_client;
    this.id_seller = sale.id_seller;
    this.name_client = sale.name_client;
} 

Sale.create = function (newSale, result) {
    dbConn.query("INSERT INTO sales set ?", newSale, function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(err, null);
        }
        else{
        console.log(res);
        result(null, res.insertId);
        }
    });
};

Sale.findAll = function (result) {
    dbConn.query("SELECT id_sale, total_value, p.description as product_description, " +
    "p.id_product as id_product, amount, s.unit_price, date, id_client, u.id_user as id_seller, u.name as name_seller, name_client " +
    "FROM sales s INNER JOIN products p on s.id_product = p.id_product "+
    "INNER JOIN users u on u.id_user = s.id_seller", function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(null, err);
        }
        else{
        console.log('products : ', res);
        result(null, res);
        }
    });
};


Sale.delete = function (idSale, result) {
    dbConn.query("DELETE FROM sales WHERE id_sale = ?", idSale, function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(err, null);
        }
        else{
        console.log(res);
        result(null, res);
        }
    });
};

Sale.update = function(id, sale, result){
    dbConn.query("UPDATE sales SET total_value=?,id_product=?,amount=?,unit_price=?,date=?,id_client=?,id_seller=?,name_client=? WHERE id_sale = ?",
     [sale.total_value,sale.id_product,sale.amount,sale.unit_price,sale.date,sale.id_client, sale.id_seller, sale.name_client, id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }else{
      result(null, res);
    }
    });
};

module.exports= Sale;
