const {Router} = require('express')

const router = Router();

const  subjectController = require('../../../controllers/api/v1/subject_controller');

router.post('/create',subjectController.create);


module.exports =router;