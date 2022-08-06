import { useState, useEffect } from "react";
import BackendService from "../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFileCirclePlus,
  faMobileAndroidAlt,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import dayjs from "dayjs";

export default function Home() {
  const [perfil, setPerfil] = useState({});
  const [curriculo, setCurriculo] = useState([]);

  useEffect(() => {
    const backendService = new BackendService();
    backendService.getPerfil().then((res) => {
      setPerfil(res);
    });
    backendService.getCurriculo().then((res) => {
      setCurriculo(res);
    });
  }, []);

  function getCurriculo(curriculo) {
    return curriculo.map((e) => {
      let data_entrada = dayjs(e.data_inicio.split("T")[0]).format(
        "DD/MM/YYYY"
      );
      let data_saida = dayjs(e.data_saida.split("T")[0]).format("DD/MM/YYYY");
      return (
        <div className="p-5 my-5 bg-indigo-100 rounded-[12px]">
          <ul className="list-none text-neutral-700">
            <li className="text-3xl text-left font-bold">
              {e.empresa}
              <spam className="text-lg ml-10 font-normal italic">
                {data_entrada} ~ {data_saida}
              </spam>
            </li>
            <li className="text-1xl text-left font-bold">{e.resumo}</li>
          </ul>
        </div>
      );
    });
  }

  return (
    <>
      <div className="grid grid-cols-4 p-20">
        <div className="pr-10">
          <div className="container mx-auto">
            <img src={perfil.avatar_path} />
            <p className="text-right cursor-pointer">
              <Link href={"/admin?term=perfil"}>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className="fa-lg"
                  color={"#a5b4fc"}
                />
              </Link>
            </p>
            <ul className="list-none">
              <li className="text-3xl text-center font-bold">
                {perfil.nome} {perfil.sobrenome}
              </li>
              <li className="text-sm text-left pt-2 font-semibold">
                {perfil.perfil}
              </li>
              <li className="text-sm text-left pt-2">
                <p>
                  <FontAwesomeIcon icon={faGithub} className="fa-lg" />
                  <spam className="pl-2">
                    <a
                      href={perfil.github}
                      className="text-blue-600 visited:text-purple-600"
                    >
                      {perfil.github}
                    </a>
                  </spam>
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} className="fa-lg" />
                  <spam className="pl-2">
                    <a
                      href={perfil.email}
                      className="text-blue-600 visited:text-purple-600"
                    >
                      {perfil.email}
                    </a>
                  </spam>
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faMobileAndroidAlt}
                    className="fa-lg"
                  />
                  <spam className="pl-2">
                    <a
                      href={`tel:+55${perfil.celular}`}
                      className="text-blue-600 visited:text-purple-600"
                    >
                      {perfil.celular}
                    </a>
                  </spam>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-3 bg-indigo-300 p-10 rounded-[12px] drop-shadow-md">
          <p className="text-right cursor-pointer">
            <Link href={"/admin?term=curriculo"}>
              <FontAwesomeIcon
                icon={faFileCirclePlus}
                className="fa-lg"
                color={"snow"}
              />
            </Link>
          </p>
          <p className="text-3xl text-neutral-700 font-bold">
            Expericências profissionais
          </p>
          {getCurriculo(curriculo)}
        </div>
      </div>
    </>
  );
}
