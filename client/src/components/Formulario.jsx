import React from 'react'
import { useState } from 'react'
import Axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';

function Formulario() {
  const [form, setForm] = useState({ nombre: "", edad: 0, pais: "", cargo: "", años: 0 })
  const [empleadosList, setList] = useState([])

  const handleChange = (e) => {
    const { value, name } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const add = (e) => {
    Axios.post("http://localhost:3000/create", form).then(() => {
      getEmpleados(); // Cada que se agregue un empleado lo imprime en la tabla
      alert("empleadp registrado")

    })
  }
  const getEmpleados = () => {
    Axios.get("http://localhost:3000", form).then((res) => {
      setList(res.data) //data son los datos que trae del backend
      console.log("obteniendo empleados");
    })
  }


  console.log(form)

  return (
    <div className="container">
      <div className="datos">
        <div className="lista">
          <button

            onClick={getEmpleados}>
            listar
          </button >

        </div>

      </div>
      <div className="card text-center">
        <div className="card-header">
          Registro De Empleados
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text">Nombre:</span>
            <input
              class="form-control"
              type="text"
              name='nombre'
              onChange={handleChange}
            />
          </div>
          <div class="input-group mb-3">
            <span className="input-group-text">Edad:</span>
            <input
              class="form-control"
              name='edad'
              type="number"
              onChange={handleChange}
            />
          </div>
          <div class="input-group mb-3">
            <span className="input-group-text">Pais:</span>
            <input
              class="form-control"
              name='pais'
              type="text"
              onChange={handleChange} />
          </div>
          <div class="input-group mb-3">
            <span className="input-group-text">Cargo:</span>
            <input
              class="form-control"
              name='cargo'
              type="text"
              onChange={handleChange} />
          </div>
          <div class="input-group mb-3">
            <span className="input-group-text">Años:</span>
            <input
              class="form-control"
              type="number"
              name='años'
              onChange={handleChange} />
          </div>
        </div>
        <div class="card-footer text-muted">
          <button
            className='btn btn-success'
            onClick={add}
          >Registrar
          </button>
        </div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">nombre</th>
            <th scope="col">edad</th>
            <th scope="col">pais</th>
            <th scope="col">cargo</th>
            <th scope="col">años</th>
            <th scope="col">acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            empleadosList.map((value, index) => {
              return (<tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.nombre}</td>
                  <td>{value.edad}</td>
                  <td>{value.pais}</td>
                  <td>{value.cargo}</td>
                  <td>{value.años}</td>
                  <td><button className='btn btn-secondary'>actualizar</button></td>
                </tr>)
             
            })
          }

        </tbody>
      </table>
    </div>
  )
}

export default Formulario