import mongoose from 'mongoose';
import slugify from 'slugify';


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: [true, 'name already exists'],
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    email: {
        type: String,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
},
    {
        toJSON: {
            virtuals: true,
            // Hide the _id and the __v field from the frontend
            transform: function (_, ret) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
            }
        },
        toObject: {
            virtuals: true,
            // Hide the _id and the __v field from the frontend
            transform: function (_, ret) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
            }
        },
    });


userSchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});

export default mongoose.model('userthatpost', userSchema);
