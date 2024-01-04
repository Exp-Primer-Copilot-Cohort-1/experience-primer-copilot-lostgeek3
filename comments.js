// Create web server

// Import modules
const express = require("express");
const router = express.Router();

// Import database
const db = require("../models");

// Import middleware
const middleware = require("../middleware");

// Import controllers
const commentController = require("../controllers/commentController");

// Comments create
router.post(
  "/",
  middleware.isLoggedIn,
  commentController.commentCreate
);

// Comments edit
router.get(
  "/:comment_id/edit",
  middleware.checkCommentOwnership,
  commentController.commentEdit
);

// Comments update
router.put(
  "/:comment_id",
  middleware.checkCommentOwnership,
  commentController.commentUpdate
);

// Comments destroy
router.delete(
  "/:comment_id",
  middleware.checkCommentOwnership,
  commentController.commentDestroy
);

// Export module
module.exports = router;