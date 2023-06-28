import { db } from "./../database/db.js";

export const getAllCategories = (req, res) => {
  const q = "SELECT * FROM categories";

  db.query(q, [], (err, data) => {
    if (err) return res.status(409).json(err);

    return res.status(200).json(data);
  });
};

export const getCategory = (req, res) => {
  const categoryId = req.params.id;
  const q = "SELECT * FROM categories WHERE id = ?";

  db.query(q, [categoryId], (err, data) => {
    if (err) return res.status(409).json(err);

    if (data.length === 0) {
      return res.status(404).json({ message: "Category not found" });
    }

    return res.status(200).json(data[0]);
  });
};