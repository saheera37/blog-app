import mysql from "mysql2"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  // password: process.env.DB_KEY,
  password: "saheera@123",
  database:"blog"
})