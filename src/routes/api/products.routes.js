const { getAll, create, update, deleteProd, getById, getByPrice, getByStock } = require('../../controllers/products.controller');
const { checkToken } = require('../../middlewares/users.middlewares');

const router = require('express').Router();

router.get('/', getAll);
router.get('/price/:min/:max', getByPrice);
router.get('/actives', getByStock);
router.get('/:_id', getById);

router.post('/', checkToken, create);

router.put('/:_id', update);

router.delete('/:_id', deleteProd)

module.exports = router;