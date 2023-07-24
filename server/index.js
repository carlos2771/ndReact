const express = require("express")
const cors = require("cors")

const empleadosRoutes = require("./routes/empleado.routes")
const app = express()


app.use(express.json())
app.use(cors())
app.use(empleadosRoutes)


const PORT = 3000
app.listen(PORT, (req,res)=>{
    console.log(`El servidor se esta escuchando en el puerto: http://localhost:${PORT}`);
})