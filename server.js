const express = require('express')
const connectDB = require('./database/dbconfig')
const validateToken = require('./middleware/accessTokenHandler')
const errorHandler = require('./middleware/errorHandler')
const projectRouter = require('./routes/projects')
const userRouter = require('./routes/user')
const blogRouter = require('./routes/blogs')
const contactRouter = require('./routes/contact')
const app = express()
const port = 3000

require("dotenv").config()

app.use(express.json());
app.get('/', (req, res) => res.send('Hello World!'))
app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/user", userRouter)
app.use("/api/v1/blogs", blogRouter)
app.use("/api/v1/contact", contactRouter)
app.use(errorHandler);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        app.listen(port, () => console.log(`Example app listening on port ${port}!`))

    } catch (error) {
        console.log(error)
    }
}
start();