import express from "express";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./db.js";
import colors from "colors";
import employeeRoutes from "./routes/employeeRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();
dotenv.config();
app.use(express.json());
connectDB();
app.use("/api/employees", employeeRoutes);
app.use(errorHandler);
// app.use(notFound);

// const __dirname = path.resolve();
// console.log(__dirname);
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/quizmaker/build")));
//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "quizmaker", "build", "index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API IS RUNNING");
//   });
// }

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("SERVER STARTED"));
