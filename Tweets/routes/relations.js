const express = require("express");
const router = express.Router();

const {
    create,
    remove
} = require("../controllers/relations");

const { userRelationId } = require("../controllers/relations");

router.get("/relation" );
router.post("/relation/create/:userRelationId", create);
router.delete("/relation/:userRelationId", remove);

router.param("userRelationId", userRelationId);

module.exports = router;