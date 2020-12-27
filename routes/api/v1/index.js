const { Router } =require('express')
const router = Router();


router.use('/students', require('./student'));
router.use('/teachers', require('./teacher'));
router.use('/subject',require('./subject'));

module.exports = router;