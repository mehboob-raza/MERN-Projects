import express from "express";
import { PORT, mongoDBUrl } from "./config.js";
import mongoose from "mongoose";
import bookRoutes from "./routes/bookRoutes.js";
import cors from "cors";

const app = express();

// Middleware for handeling CORS policy
// Option 1: Allow all origins with default of cors

app.use(cors());

// Option 2: Allow custom origins

// app.use(
//   cors({
//     origin: "http://localhost:5173/",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.use(express.json());
app.use("/books", bookRoutes);

// home route
app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to MERN Stack");
});

mongoose
  .connect(mongoDBUrl)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to the port ${PORT}`);
    });
  })

  .catch((error) => {
    console.log(error);
  });
