const Router = require('express');
const auth = require('../middleware/auth');
const {registration, login, check} = require('../controllers/userController')
const router = Router();

router.post('/registration', registration);
router.post('/login', login);
router.get('/auth', auth, check);

module.exports = router;