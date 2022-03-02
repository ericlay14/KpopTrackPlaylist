const db = require("../models/artistModel.js");

const controller = {};

controller.bts = async (req, res, next) => {
  try {
    const artist = "SELECT * FROM artist_info WHERE _id = 1";
    const result = await db.query(artist);
    res.locals.bts = result.rows;
    return next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = controller;
