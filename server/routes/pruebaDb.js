const Router = require("express")
const pool = require("../db/database")

const router = Router()

router.get("/ping", async(req, res)=>{
    const [rows] = await pool.query("select 1 + 1 as result")
    console.log(rows[0]);
    res.json(rows)
})

module.exports = router