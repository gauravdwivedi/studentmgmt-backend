const {Router} = require('express');


const router = Router();

const teacherController = require('../../../controllers/api/v1/teacher_controller');

router.post('/register',teacherController.register);

module.exports =router;