import express from "express";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import categoriesRouter from "./routes/categories.js";
import typesRouter from "./routes/types.js";
import cookieParser from "cookie-parser";
import multer from "multer";

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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./../client/public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
  fileFilter: function (req, file, cb) {
    const allowedExtensions = [".jpg", ".jpeg", ".png"];
    const fileExtension = file.originalname.toLowerCase().slice(-4);

    if (allowedExtensions.includes(fileExtension)) {
      cb(null, true);
    } else {
      cb(
        new Error(
          "Invalid file type. Only JPG, JPEG, and PNG files are allowed."
        )
      );
    }
  },
});

const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), function (req, res, next) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/categories", categoriesRouter);
app.use("/api/types", typesRouter);

app.listen(8080, () => {
  console.log("servidor corriendo en puerto 8080");
});
