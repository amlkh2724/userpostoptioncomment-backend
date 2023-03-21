

// getPosts,
// createPost
import asyncHandler from '../middleware/asyncHandler.js'
import postusercreate from '../models/userthatpost.js'
export const getPosts = asyncHandler(async (req, res, next) => {
    const checkIsPosts = await postusercreate.find()
    res.status(200).json({
        success: true,
        data: checkIsPosts,
    });
})


export const createPost = asyncHandler(async (req, res, next) => {
    console.log(req.body);

    const isOkayToCreateThisPost = await postusercreate.create(req.body)
    res.status(200).json({
        success: true,
        data: isOkayToCreateThisPost,
    })

})


