import { useEffect } from "react"
import {useProvedor} from '../context/ProvedorContext'
import ProvedorCard from "../components/ProvedorCard";

function ProvedorPage() {
  const {getProvedors, provedores} = useProvedor();
 
  useEffect(()=>{
    getProvedors();
  }, [])


  if (provedores.length === 0)
    return(<h1>No hay proveedores</h1>)


  return (
    <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-2">
      {
        provedores.map((provedor)=>(
          <ProvedorCard provedor={provedor}
                          key={provedor._id}

          />
        ))
      }
    </div>
  )
}

export default ProvedorPage