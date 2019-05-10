const express = require('express');
const router = express.Router();
const map_controller = require('../controllers/map_controller');

// get all
router.route('/').get(map_controller.getMaps);

// get by id
router.route('/:id').get(map_controller.getMap);

// add
router.route('/').post(map_controller.addMap);

// delete
router.route('/:id').delete(map_controller.deleteMap);

// update
router.route('/:id').put(map_controller.updateMap);

module.exports = router;