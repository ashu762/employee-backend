import express from "express";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./db.js";
import colors from "colors";
import employeeRoutes from "./routes/employeeRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
dotenv.config();
app.use(express.json());
connectDB();
app.use("/api/employees", employeeRoutes);
app.use(errorHandler);
// app.use(notFound);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("SERVER STARTED"));
