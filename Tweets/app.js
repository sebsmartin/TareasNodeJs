// const
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
require("dotenv").config();


const app = express();

const db = async () => {
    try {
        const sucess = await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log("DB Connected");

    } catch (error) {
        console.log("DB Connected Error", error);
    }
}
db();


// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

const authRoutes = require("./routes/auth");
const fileRoutes = require("./routes/file");
const relationsRoutes = require("./routes/relations");
const tweettRoutes = require("./routes/tweet");
const userRoutes = require("./routes/user");


app.use("/api", authRoutes);
app.use("/api", fileRoutes);
app.use("/api", relationsRoutes);
app.use("/api", tweettRoutes);
app.use("/api", userRoutes);


// port
const port = process.env.PORT || 8000;

// listen port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
