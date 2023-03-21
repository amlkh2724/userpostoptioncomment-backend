import asyncHandler from '../middleware/asyncHandler.js'
import addingComment from '../models/commentsschema.js'

export const addComment = asyncHandler(async (req, res, next) => {
    console.log("add comment", addComment);

    const addCommentToThePost = await addingComment.create(req.body)
    res.status(200).json({
        success: true,
        data: addCommentToThePost,
    });
})
export const getallcomment = asyncHandler(async (req, res, next) => {
    const getallcomment2 = await addingComment.find()
    res.status(200).json({
        success: true,
        data: getallcomment2,
    })

})
