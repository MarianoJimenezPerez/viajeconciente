import express from "express";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import categoriesRouter from "./routes/categories.js";
import cookieParser from "cookie-parser";

const app = express();
const whiteList = ["http://localhost:3000", "http://localhost:8080"];

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: whiteList,
    credentials: true,
    origin: true,
  })
);
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/categories", categoriesRouter);

app.listen(8080, () => {
  console.log("servidor corriendo en puerto 8080");
});
