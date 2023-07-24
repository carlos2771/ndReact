const { createPool } = require("mysql2/promise")


const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "empleados_crud"
})

module.exports = pool