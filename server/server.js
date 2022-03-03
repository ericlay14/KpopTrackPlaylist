const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;

const controller = require("./controllers/controller.js");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/artists", controller.getArtists, (req, res) => {
  return res.status(200).json(res.locals.artists);
});

app.post("/artists", controller.updateSong, (req, res) => {
  return res.status(201).send("Updated Song");
});
/*
// BTS
app.get("/bts", controller.bts, (req, res) => {
  return res.status(201).json(res.locals.bts);
});
app.post("/bts", controller.Addbts, (req, res) => {
  return res.status(201).send("Updated Artist");
});

// ITZY
app.get("/itzy", controller.itzy, (req, res) => {
  return res.status(201).json(res.locals.itzy);
});
app.post("/itzy", controller.AddItzy, (req, res) => {
  return res.status(201).send("Updated Artist");
});

// Loona
app.get("/loona", controller.loona, (req, res) => {
  return res.status(201).json(res.locals.loona);
});
app.post("/loona", controller.AddLoona, (req, res) => {
  return res.status(201).send("Updated Artist");
});

// Enhypen
app.get("/enhypen", controller.enhypen, (req, res) => {
  return res.status(201).json(res.locals.enhypen);
});
app.post("/loona", controller.AddEnhypen, (req, res) => {
  return res.status(201).send("Updated Artist");
});

// Woo!ah!
app.get("/woo!ah!", controller.wooah, (req, res) => {
  return res.status(201).json(res.locals.wooah);
});
app.post("/woo!ah!", controller.AddWooah, (req, res) => {
  return res.status(201).send("Updated Artist");
});

// Ateez
app.get("/ateez", controller.ateez, (req, res) => {
  return res.status(201).json(res.locals.ateez);
});
app.post("/ateez", controller.AddAteez, (req, res) => {
  return res.status(201).send("Updated Artist");
});
*/

// catch-all route handler for any requests to an unknown route
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

/**
 * express error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
