import mongoose from 'mongoose';
import slugify from 'slugify';

const commentSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        slug: {
            type: String,
            unique: true
        }
    },
    {
        toJSON: {
            virtuals: true,
            transform: function (_, ret) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
            }
        },
        toObject: {
            virtuals: true,
            transform: function (_, ret) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
            }
        }
    }
);

commentSchema.pre('save', function (next) {
    this.slug = slugify(this.text, { lower: true });
    next();
});

export default mongoose.model('Comment', commentSchema);
