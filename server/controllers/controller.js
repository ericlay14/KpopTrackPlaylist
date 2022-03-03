const db = require("../models/artistModel.js");

const controller = {};

controller.getArtists = async (req, res, next) => {
  try {
    const query = "SELECT * FROM artist_info ORDER BY _id";
    const result = await db.query(query);
    console.log("result: ", result);
    res.locals.artists = result.rows;
    return next();
  } catch (err) {
    console.log("Error getting artists: ", err);
  }
};

controller.Addbts = async (req, res, next) => {
  // const artist = req.body.artist
  try {
    //const { newSong } = req.body;
    const addSong =
      "UPDATE artist_info SET song_title = 'Stay''Butter' WHERE artist_name = 'BTS';";
    const result = await db.query(addSong);
    res.locals.Addbts = result.rows;
    return next();
  } catch (error) {
    console.log(error);
  }
};

// controller.updateSong = async (req, res, next) => {
//   try {
//     const { newSong } = req.body;
//     const query = "INSERT INTO song_title (newSong) VALUES ($1) RETURNING *";
//     const result = await db.query(query, [newSong]);
//     console.log("result: ", result);
//     res.locals.artists = result.rows;
//     return next();
//   } catch (err) {
//     console.log("Error getting artists: ", err);
//   }
// };

/*
// BTS
controller.bts = async (req, res, next) => {
  try {
    const bts = "SELECT * FROM artist_info WHERE _id = 1";
    const result = await db.query(bts);
    res.locals.bts = result.rows;
    console.log("result rows: ", result.rows);
    return next();
  } catch (error) {
    console.log(error);
  }
};
controller.Addbts = async (req, res, next) => {
  // const artist = req.body.artist
  try {
    //const { newSong } = req.body;
    const addSong =
      "UPDATE artist_info SET song_title = 'Stay''Butter' WHERE artist_name = 'BTS';";
    const result = await db.query(addSong);
    res.locals.Addbts = result.rows;
    return next();
  } catch (error) {
    console.log(error);
  }
};

// ITZY
controller.itzy = async (req, res, next) => {
  try {
    const itzy = "SELECT * FROM artist_info WHERE _id = 2";
    const result = await db.query(itzy);
    res.locals.itzy = result.rows;
    return next();
  } catch (error) {
    console.log(error);
  }
};
controller.AddItzy = async (req, res, next) => {
  try {
    //const { newSong } = req.body;
    const addSong =
      "UPDATE artist_info SET song_title = 'Dalla Dalla''Kidding Me' WHERE artist_name = 'ITZY';";
    const result = await db.query(addSong);
    res.locals.AddItzy = result.rows;
    return next();
  } catch (error) {
    console.log(error);
  }
};

// Loona
controller.loona = async (req, res, next) => {
  try {
    const loona = "SELECT * FROM artist_info WHERE _id = 3";
    const result = await db.query(loona);
    res.locals.loona = result.rows;
    return next();
  } catch (error) {
    console.log(error);
  }
};
controller.AddLoona = async (req, res, next) => {
  try {
    //const { newSong } = req.body;
    const addSong =
      "UPDATE artist_info SET song_title = 'Universe''PTT' WHERE artist_name = 'Loona';";
    const result = await db.query(addSong);
    res.locals.AddLoona = result.rows;
    return next();
  } catch (error) {
    console.log(error);
  }
};

// Enhypen
controller.enhypen = async (req, res, next) => {
  try {
    const enhypen = "SELECT * FROM artist_info WHERE _id = 4";
    const result = await db.query(enhypen);
    res.locals.enhypen = result.rows;
    return next();
  } catch (error) {
    console.log(error);
  }
};
controller.AddEnhypen = async (req, res, next) => {
  try {
    //const { newSong } = req.body;
    const addSong =
      "UPDATE artist_info SET song_title = 'Drunk-Dazed''Tamed-Dashed' WHERE artist_name = 'ENHYPEN';";
    const result = await db.query(addSong);
    res.locals.AddEnhypen = result.rows;
    return next();
  } catch (error) {
    console.log(error);
  }
};

// Woo!ah!
controller.wooah = async (req, res, next) => {
  try {
    const wooah = "SELECT * FROM artist_info WHERE _id = 5";
    const result = await db.query(wooah);
    res.locals.wooah = result.rows;
    return next();
  } catch (error) {
    console.log(error);
  }
};
controller.AddWooah = async (req, res, next) => {
  try {
    //const { newSong } = req.body;
    const addSong =
      "UPDATE artist_info SET song_title = 'Catch the Stars''Pandora' WHERE artist_name = 'Woo!ah!';";
    const result = await db.query(addSong);
    res.locals.AddWooah = result.rows;
    return next();
  } catch (error) {
    console.log(error);
  }
};

// Ateez
controller.ateez = async (req, res, next) => {
  try {
    const ateez = "SELECT * FROM artist_info WHERE _id = 6";
    const result = await db.query(ateez);
    res.locals.ateez = result.rows;
    return next();
  } catch (error) {
    console.log(error);
  }
};
controller.AddAteez = async (req, res, next) => {
  try {
    //const { newSong } = req.body;
    const addSong =
      "UPDATE artist_info SET song_title = 'Promise''Mist' WHERE artist_name = 'ATEEZ';";
    const result = await db.query(addSong);
    res.locals.AddAteez = result.rows;
    return next();
  } catch (error) {
    console.log(error);
  }
};
*/

module.exports = controller;
