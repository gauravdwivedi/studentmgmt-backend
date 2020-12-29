const { Router } =require('express')
const router = Router();


router.use('/users', require('./user'));
// router.use('/subject',require('./subject'));

module.exports = router;