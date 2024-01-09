import express from "express";

const app = express()

app.use(function(req, res, next){
  // res.send('this is middleware')
  next()
})

app.get('/', function( req, res){
  res.send('Hello from Home Route')
})

app.get('/profile', function(req, res){
  res.send('Hello from Profile')
})


app.listen(8080)









// import express from "express";
// import path from "path";
// import mongoose from "mongoose";

// const app = express();
// const users = [];

// mongoose.connect("mongodb://localhost:27017", {
//   dbName: "backend",
// });
// // console.log(path.json(path.join(path.resolve(), "public")));

// app.use(express.static(path.join(path.resolve(), "public")));
// app.use(express.urlencoded({ extended: true }));

// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   //   res.render("index", { name: "Raza" });
//   //   res.sendStatus(200);
//   //   res.json({
//   //     success: true,
//   //     product: [],
//   //   });
//   // to check the path of current directory

//   // const pathloc = path.resolve();
//   // res.sendFile(path.join(pathloc, "/index.html"));
//   res.render("index", { name: "Raza" });
// });

// app.get("/add", (req, res) => {
//   res.send("Nice");
// });

// app.get("/success", (req, res) => {
//   res.render("success");
// });

// app.post("/contact", (req, res) => {
//   try {
//     users.push({ username: req.body.name, email: req.body.email });
//     res.redirect("/success"); // Redirect to a success page
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error occurred");
//   }
// });

// app.get("/users", (req, res) => {
//   res.json({
//     users,
//   });
// });

// app.listen(5000, () => {
//   console.log("Server is Working");
// });
