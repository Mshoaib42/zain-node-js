import pool from "../config/db.js";

const createUserTable = async () => {
  const query = `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`;

  try {
    await pool.query(query);
    console.log("User Table Created Successfully");
  } catch (error) {
    console.error("Error Creating User Table", error);
  }
};

export default createUserTable;
