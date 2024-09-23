import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import formRoute from "./route/formRoute.js";

dotenv.config();

const app = express();

app.use(cors());

const port = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connexion réussie à MongoDB");
  })
  .catch((error) => {
    console.error("Erreur de connexion à MongoDB :", error);
  });

app.use(express.json());
app.use("/api", formRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
