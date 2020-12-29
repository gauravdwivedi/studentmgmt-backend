const { Router} = require('express');

const router =Router();

const userController = require('../../../controllers/api/v1/user_controller');

router.post('/register',userController.register);
router.post('/login',userController.login);
router.post('/tokenIsValid',userController.tokenIsValid);
router.post('/home',userController.home);

module.exports =router;