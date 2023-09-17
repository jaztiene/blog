import mysql from "mysql";

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Damonsalvatore123",
    database:"social"
});




