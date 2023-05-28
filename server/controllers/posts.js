import { db } from "./../database/db.js";
import jwt from "jsonwebtoken";

export const getAllPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat = ?"
    : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(409).json(err);

    return res.status(200).json(data);
  });
};

export const getAllNews = (req, res) => {
  const q = "SELECT * FROM posts WHERE tid = 1";

  db.query(q, [], (err, data) => {
    if (err) return res.status(409).json(err);

    return res.status(200).json(data);
  });
};

export const getAllBlogs = (req, res) => {
  const q = "SELECT * FROM posts WHERE tid = 2";

  db.query(q, [], (err, data) => {
    if (err) return res.status(409).json(err);

    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const q = "SELECT * FROM posts WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(409).json(err);

    return res.status(200).json(data);
  });
};

export const addPost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token)
    return res.status(401).json("Necesitas estar logueado para publicar");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("El token no es valido");

    const q =
      "INSERT INTO posts(`title`, `desc`, `img`, `date`, `uid`, `cid`, `tid`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.date,
      userInfo.id,
      req.body.cat,
      req.body.type,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Posteo agregado exitosamente");
    });
  });
};
