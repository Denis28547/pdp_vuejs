const Router = require("express");
const router = new Router();
const controller = require("../controllers/authController");
const { check } = require("express-validator");
const authMiddleware = require("../middlewaree/authMiddleware");
const roleMiddleware = require("../middlewaree/roleMiddleware");

router.post(
  "/registration",
  [
    check("username", "Name shouldn't be empty").notEmpty(),
    check(
      "password",
      "Pass should be more than 4 char and less than 10"
    ).isLength({ min: 4, max: 10 }),
  ],
  controller.registration
);
router.post("/login", controller.login);
router.get("/logout", controller.logout);
router.get("/user", controller.getUser);
router.get("/users", roleMiddleware(["ADMIN"]), controller.getUsers);

module.exports = router;
