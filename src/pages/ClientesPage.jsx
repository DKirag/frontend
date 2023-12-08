import { useEffect } from "react"
import { useClientes } from "../context/ClientesContext"
import ClientesCard from "../components/ClientesCard";
function ClientesPage() {
  const {getClients, clientes} = useClientes();

  useEffect( ()=>{
    getClients();
  }, [])

    if (clientes.length ===0)
      return(<h1>No hay clientes</h1>)


  return (
    <div className=" grid grid-cols-3 gap-2">
      {
        clientes.map((cliente)=>(
         <ClientesCard cliente={cliente}
                        key={cliente._id}

          />
        ))
      }
    </div>
  )
}

export default ClientesPage