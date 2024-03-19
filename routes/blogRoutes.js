const express = require('express');
const router = express.Router();

//import controller


const { createComment } = require("../controllers/commentController");
const { createPost } = require("../controllers/postController");
const { getAllPost } = require("../controllers/postController");
const { createLike } = require("../controllers/likeController");
const { removeLike } = require("../controllers/likeController");

router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPost);
router.get("/likes/create", createLike);
router.post("/likes/remove", removeLike);


module.exports = router; 