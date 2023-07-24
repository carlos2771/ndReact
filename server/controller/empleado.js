const pool = require("../db/database.js")
const controller = {}

controller.empleadosList = async(req, res) => {
   try {
     const {nombre, edad, pais, cargo, años} = req.body
         const result = pool.query("INSERT INTO empleados(nombre, edad, pais, cargo, años)  values(?,?,?,?,?) ", [nombre, edad, pais, cargo, años])
         console.log("dato insertado", result);
         res.status(200).json({
             id: result.insertId, // este id sale despues de hacer la consulta post en el thunder
             nombre, 
             edad,
             pais,
             cargo,
             años
         })
   } catch (error) {
    return res.status(500).json({message: error.message})
   }
        
}

controller.empleados = async(req,res)=>{
    
    try {
        const [result] = await pool.query("select * from empleados")
        if(result){
        console.log(result);
        res.json(result)
        }else{
         res.status(500).json({message: "no hay datos"})
        }
    } catch (error) {
        console.log(error);
    }

}

controller.updateEmpledos = async(req, res) => {
    try {
        const id = req.params.id
        const newEmpleado = req.body
        const result = await pool.query("update empleados set ? where id = ?",[newEmpleado,id])
        res.json(result)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}


module.exports = controller