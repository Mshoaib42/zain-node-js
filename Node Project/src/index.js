import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import errorHandling from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARES

app.use(express.json());
app.use(cors());

// ROUTES MIDDLEWARE
app.use("/api/v1", userRoutes);

//  TESTING POSTGRES CONNECTION

app.get("/", async (req, res) => {
  console.log("TESTING POSTGRES CONNECTION");
  const result = await pool.query("SELECT current_database()");
  console.log("End of Testing");
  res.send(`The Database Name is ${result.rows[0].current_database}`);
});

// ERROR HANDLING MIDDLEWARE
app.use(errorHandling);

// CREATE USER TABLE IF NOT EXISTS
createUserTable();

//  SERVER RUNNING
app.listen(PORT, () => {
  console.log(`${PORT} is Running`);
});
