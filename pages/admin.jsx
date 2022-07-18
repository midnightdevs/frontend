import PerfilForm from "../components/forms/PerfilForm"
import BackendService from '../services/api'

import { useEffect, useState } from "react";

export default function admin() {
    const [perfil, setPerfil] = useState({})
    const [curriculo, setCurriculo] = useState([])
    
    console.log(perfil)

    useEffect(() => {
        const backendService = new BackendService()
        backendService.getPerfil('johndoe@gmail.com').then((res) => {
          setPerfil(res)
        })
        backendService.getCurriculo().then((res) => {
          setCurriculo(res)
        })
      }, []);

    let gridCols = 'grid-cols-5'
    let colSpan = 'col-span-3'

    return (
        <div className={`grid ${gridCols} gap-4 p-10`}>
            <div className="col-span-1 bg-red-100 rounded-[12px] p-10 h-fit">
                <ul className="font-bold text-gray">
                    <li className="mb-2">
                        <h1>Editar Perfil</h1>
                    </li>
                    <li>
                        <h1>Editar Curriculo</h1>
                    </li>

                </ul>
            </div>
            <div className={`${colSpan} bg-indigo-300 p-10 rounded-[12px]`}>
               <PerfilForm perfil={perfil} />
            </div>
        </div>
    )
}