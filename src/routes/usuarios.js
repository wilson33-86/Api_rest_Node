const {Router} = require('express');
const router = Router();

const {getUser,postUser,putUser,deleteUser} = require('../controllers/usuarios.js');
 
router.route('/')
.get(getUser)
.post(postUser)



router.route('/:id')
.put(putUser)
.delete(deleteUser);


module.exports = router;




