const Router = require("express");
const router = new Router();
const controller = require("../controllers/petsController");
const { check } = require("express-validator");
const authMiddleware = require("../middlewaree/authMiddleware");
const roleMiddleware = require("../middlewaree/roleMiddleware");

router.get("/getPetInfo", controller.getPetInfo);
router.post("/addPet", controller.addPet);
router.get("/getPet/:id", controller.getPet);
router.get("/getPets", controller.getPets);

module.exports = router;
