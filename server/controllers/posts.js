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

export const getQPost = (req, res) => {
  const quantity = parseInt(req.params.quantity);
  const labelAlias = "clabel";
  const q = `SELECT posts.*, categories.label AS ${labelAlias} FROM posts LEFT JOIN categories ON posts.cid = categories.id ORDER BY posts.date DESC LIMIT ?`;

  db.query(q, [quantity], (err, data) => {
    if (err) return res.status(409).json(err);

    return res.status(200).json(data);
  });
};

export const searchPosts = (req, res) => {
  const searchTerm = req.query.searchTerm;

  const q = "SELECT * FROM posts WHERE title LIKE ? OR `desc` LIKE ?";
  const searchValue = `%${searchTerm}%`;

  db.query(q, [searchValue, searchValue], (err, data) => {
    if (err) {
      return res.status(409).json(err);
    }

    if (data.length === 0) {
      return res.status(404).json({ message: "Posts not found" });
    }

    return res.status(200).json(data);
  });
};

export const getPostsByCategory = (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  const q = `SELECT * FROM posts WHERE cid = ?`;

  db.query(q, [categoryId], (err, data) => {
    if (err) return res.status(409).json(err);

    if (data.length === 0)
      return res.status(404).json({ message: "No posts found" });

    return res.status(200).json(data);
  });
};

export const getPostsByType = (req, res) => {
  const typeId = parseInt(req.params.typeId);
  const q = `SELECT * FROM posts WHERE tid = ?`;

  db.query(q, [typeId], (err, data) => {
    if (err) return res.status(409).json(err);

    if (data.length === 0)
      return res.status(404).json({ message: "No posts found" });

    return res.status(200).json(data);
  });
};

export const getPostsBySlug = (req, res) => {
  const slug = req.params.slug
  const q = `SELECT * FROM posts WHERE slug = ?`;

  db.query(q, [slug], (err, data) => {
    if (err) return res.status(409).json(err);

    if (data.length === 0)
      return res.status(404).json({ message: "No posts found" });

    return res.status(200).json(data);
  });
};

