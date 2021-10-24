const express = require('express')

const router = express.Router()

const productController =   require('../controller/product.controller');
const {verifyUser, verifyAdmin} = require("../middlewares/auth");

router.get('/', productController.findAll);

router.post('/', productController.create);

router.delete('/:id', productController.delete);

router.put('/:id', productController.update);


module.exports = router;
