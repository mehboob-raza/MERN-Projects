import express from "express";

const app = express();

// routes
app.get("/", (req, res) => {
  res.send("<h1>Welcome!</h1>");
});

const port = 5000;
app.listen(port, () => console.log(`App is running on ${port}`));
