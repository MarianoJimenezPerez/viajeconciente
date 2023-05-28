import { db } from "./../database/db.js";

export const getAllTypes = (req, res) => {
  const q = "SELECT * FROM types";

  db.query(q, [], (err, data) => {
    if (err) return res.status(409).json(err);

    return res.status(200).json(data);
  });
};
