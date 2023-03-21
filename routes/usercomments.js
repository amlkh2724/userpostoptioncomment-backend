import express from 'express'
import {
    getallcomment,
    addComment,
} from '../controllers/comments.js'

const router = express.Router();
// router.post('/api/v1/comments', addComment);
router
    .route('/')
    .get(getallcomment)
    .post(addComment)


export default router;
