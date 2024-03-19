

exports.dummyLike = (req, res) => {
    res.send("Hello");
}

const Like = require("../models/likeModel");
const Post = require("../models/postModel");

exports.createLike = async (req, res) => {
    try {
        const { postId, user } = req.body;
        const newLike = await Like.create({ postId, user });
        const savedLike = await Post.findByIdAndUpdate(postId, { $push: { likes: newLike._id } }, { new: true }).populate("likes").exec();

        res.status(200).json({
            success: true,
            body: savedLike
        })
    } catch (error) {
        console.log(error);
        res.status(500)
            .json({
                success: false,
                message: "couldn't create like "

            })
    }
}


exports.removeLike = async (req, res) => {
    try {
        const { postId, likeId } = req.body;

        const deletedLike = await Like.findOneAndDelete({ post: postId, _id: likeId });
        const updatedPost = await Post.findByIdAndUpdate(postId, { $pull: { likes: likeId } }, { new: true });

        res.status(200).json({
            success: true,
            updatedPost: updatedPost
        })
    } catch (error) {
        console.log(error);
        res.status(500)
            .json({
                success: false,
                message: "couldn't delete like "

            })
    }
}