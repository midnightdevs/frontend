import PerfilForm from "../components/forms/PerfilForm"
import CurriculoForm from "../components/forms/CurriculoForm";
import BackendService from '../services/api'
import Link from 'next/link'

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCirclePlus, faHome, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function admin(props) {
    const [perfil, setPerfil] = useState({})
    const [curriculo, setCurriculo] = useState({})
    const { query } = useRouter()

    useEffect(() => {
        const backendService = new BackendService()
        backendService.getPerfil('johndoe@gmail.com').then((res) => {
            setPerfil(res)
        })
        backendService.getCurriculo().then((res) => {
            setCurriculo(res)
        })
    }, []);

    let gridCols = 'grid-cols-7'
    let colSpan = 'col-span-5'

    function returnFormComponent() {

        if (query.term === 'perfil' || !query.term) {
            return (<PerfilForm perfil={perfil} />)
        }

        if (query.term === 'curriculo') {
            console.log(query.term)
            return (<CurriculoForm curriculo={curriculo} />)
        }

    };

    return (
        <div className={`grid ${gridCols} gap-2 p-10 mt-10`}>
            <div className="col-span-2 bg-red-100 rounded-[12px] p-10 h-fit">
                <ul className="font-bold text-gray text-left">
                    <li className="mb-2 cursor-pointer">
                        <Link href={'/'}>
                            <p className="text-left">
                                <FontAwesomeIcon
                                    icon={faHome}
                                    className="fa-lg"
                                    color={"grey"}
                                    style={{ paddingLeft: 5, paddingRight: 5 }}
                                />
                                Home
                            </p>
                        </Link>
                    </li>
                    <li className="mb-2 cursor-pointer">
                        <Link href={"/admin?term=perfil"}>
                            <p className="text-left">
                                <FontAwesomeIcon
                                    icon={faPenToSquare}
                                    className="fa-lg"
                                    color={"grey"}
                                    style={{ paddingLeft: 7, paddingRight: 7 }}
                                />
                                Editar Perfil
                            </p>
                        </Link>
                    </li>
                    <li className="mb-2 cursor-pointer">
                        <Link href={"/admin?term=curriculo"}>
                            <p className="text-left">
                                <FontAwesomeIcon
                                    icon={faFileCirclePlus}
                                    className="fa-lg"
                                    color={"grey"}
                                    style={{ paddingLeft: 8, paddingRight: 8 }}
                                />
                                Adicionar Empresa
                            </p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={`${colSpan} bg-indigo-300 p-10 rounded-[12px]`}>
                {returnFormComponent()}
            </div>
        </div>
    )
}