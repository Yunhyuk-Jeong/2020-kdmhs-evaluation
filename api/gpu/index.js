const { Router } = require("express");
const router = Router();
const ctrl = require("./gpu.ctrl");

router.get("/", ctrl.list);

router.get("/new", ctrl.showCreatePage);

router.get("/:id", ctrl.checkID, ctrl.detail);

router.post("/", ctrl.create);

router.put("/:id", ctrl.checkID, ctrl.update);

router.get("/:id/edit", ctrl.checkID, ctrl.showUpdatePage);

router.delete("/:id", ctrl.checkID, ctrl.remove);

module.exports = router;
