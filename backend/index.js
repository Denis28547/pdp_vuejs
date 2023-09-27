const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const authRouter = require("./routers/authRouter");
const petsRouter = require("./routers/petsRouter");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:8080",
  })
);
app.use("/auth", authRouter);
app.use("/pets", petsRouter);

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://hard-auth:hard-auth22@cluster0.l4qhdbo.mongodb.net/test`
    );
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
