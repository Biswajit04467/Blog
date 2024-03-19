const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req, res) => {
    try {
        const { postId, body, user } = req.body;

        //create a new comment object
        const newComment = new Comment({ postId, user, body })

        //save the new comment into database
        const savedComment = await newComment.save();

        //find the post by id and add comment to its comment array
        const updatedPost = await Post.findByIdAndUpdate(postId, { $push: { comments: savedComment._id } }, { new: true })
            .populate("comments").exec();

        res.status(200).json({
            post: updatedPost,
        })
    } catch (error) {
        console.log(error);
        res.status(500)
            .json({
                success: false,
                message: "couldn't create comment "

            })
    }
}