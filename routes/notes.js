const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notes');

router.get('/', notesController.notes_list);

router.get('/create', notesController.note_create_get);
router.post('/create', notesController.note_create_post);

router.get('/:id/update', notesController.note_update_get);
router.post('/:id/update', notesController.note_update_post);

router.get('/:id/delete', notesController.note_delete_get);
router.post('/:id/delete', notesController.note_delete_post);

router.get('/:id', notesController.note_detail);

module.exports = router;