const { Router} = require('express');

const router =Router();

const studentController = require('../../../controllers/api/v1/student_controller');

router.post('/register',studentController.register);

module.exports =router;