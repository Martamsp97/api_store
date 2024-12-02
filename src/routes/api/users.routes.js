const { createUser, login, addProduct } = require('../../controllers/users.controller');
const { checkToken } = require('../../middlewares/users.middlewares');


const router = require('express').Router();

router.post('/register', createUser);
router.post('/login', login);

router.put('/add-product/:_id', checkToken, addProduct)

module.exports = router;