const express = require("express");
const {todoDeleteController, todoUpdateController} = require('../controllers/todoController');

const router = express.Router();

router.put('/update/:id', todoUpdateController);
router.delete('/delete/:id', todoDeleteController);

module.exports = router;