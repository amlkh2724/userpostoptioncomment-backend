import express from "express"
import colors from "colors"
import dotnev from "dotenv"
import morgan from "morgan";
import connectDB from "./config/db.js"
import userpost from './routes/userspost.js'
import comments from './routes/usercomments.js';

dotnev.config({ path: './config/config.env' })
connectDB()

const app = express();
app.use(express.json())

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

app.get('/', (req, res) => {
    res.send("this is your schema:")
})

app.use("/api/v1/userposts", userpost);
app.use('/api/v1/addcomment', comments);

const PORT = process.env.PORT || 5000
console.log("your port is :", PORT);



const server = app.listen(PORT, console.log(`the server is running on port ${PORT}`.yellow.bold))



// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    server.close(() => process.exit(1));
});
