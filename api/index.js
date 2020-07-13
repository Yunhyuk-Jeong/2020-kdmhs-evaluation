const { Router } = require("express");
const router = Router();

router.use("/cpu", require("./cpu"));
router.use("/gpu", require("./gpu"));
router.use("/user", require("./user"));

module.exports = router;
