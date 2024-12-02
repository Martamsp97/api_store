const router = require('express').Router();

router.use('/products', require('./api/products.routes'));
router.use('/users', require('./api/users.routes'));

module.exports = router;