const express = require('express')
const router = express.Router()

const {verifyUser, verifyAdmin} = require("../middlewares/auth");
const userController =   require('../controller/user.controller');


router.get('/', userController.findAll);

router.post('/', userController.create);

router.delete('/:id',verifyUser, verifyAdmin, userController.delete);

router.post('/login',verifyUser, userController.googleLogin);

router.put('/:id', userController.update);


module.exports = router;
