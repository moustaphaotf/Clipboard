const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/', usersController.users_list);

router.get('/create', usersController.user_create_get);
router.post('/create', usersController.user_create_post);

router.get('/:id/update', usersController.user_update_get);
router.post('/:id/update', usersController.user_update_post);

router.get('/:id/delete', usersController.user_delete_get);
router.post('/:id/delete', usersController.user_delete_post);

router.get('/:id', usersController.user_detail);

module.exports = router;