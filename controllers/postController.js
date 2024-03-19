const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
    try {
        const { title, body } = req.body;

        const savedPost = await Post.create({ title, body });

        res.status(200).json({
            success: true,
            post: savedPost,
            message: "mesaage is clear"
        })
    } catch (error) {
        console.log(error);
        res.status(500)
            .json({
                super: false,
                message: "couldn't create post "

            })
    }
}

exports.getAllPost = async (req, res) => {
    try {
        const allPost = await Post.find({}).populate("likes").populate("comments").exec();
        res.status(200).json({
            success: true,
            data: allPost
        })
        // res.send(allPost);

    } catch (error) {
        console.log(error);
        res.status(500)
            .json({
                success: false,
                message: "couldn't fetch post "

            })
    }
}