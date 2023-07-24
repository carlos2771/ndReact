const Router = require("express")
const {empleadosList, empleados,updateEmpledos} = require("../controller/empleado")
const router = Router()

router.get("/", empleados)
router.post("/create", empleadosList)
router.post("/update/:id", updateEmpledos)

module.exports = router