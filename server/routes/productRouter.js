const Router = require('express');
const router = Router();
const {add, get, remove} = require('../controllers/productController');


router.post('/', add);
router.get('/', get);
router.delete('/:id', remove);

module.exports = router;