import { useState, useEffect, useRef } from "react"



export default function PerfilForm(props) {
    const [perfil, setPerfil] = useState(props.perfil)
    useEffect(() => { setPerfil(props.perfil) }, [props])

    return (
        <>
            {props.title && <p class="capitalize text-2xl font-semibold mb-5">{props.title}</p>}
            <form action="#" method="POST">
                <div className="grid grid-cols-6 gap-6 drop-shadow">
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="nome" className="block text-sm font-semibold text-gray-700">
                            Nome
                        </label>
                        <input
                            type="text"
                            name="nome"
                            id="nome"
                            autoComplete="given-name"
                            className="p-1.5 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="digite o seu nome aqui..."
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="sobrenome" className="block text-sm font-semibold text-gray-700">
                            Sobrenome
                        </label>
                        <input
                            type="text"
                            name="sobrenome"
                            id="sobrenome"
                            autoComplete="given-name"
                            className="p-1.5 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="digite o seu sobrenome aqui..."
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            autoComplete="given-name"
                            className="p-1.5 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="digite o seu email aqui..."
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="celular" className="block text-sm font-semibold text-gray-700">
                            Celular
                        </label>
                        <input
                            type="text"
                            name="celular"
                            id="celular"
                            autoComplete="given-name"
                            className="p-1.5 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="digite o seu email aqui..."
                        />
                    </div>
                    <div className="grid grid-cols-6 col-span-6">
                        <div className="h-fit col-span-2 p-5 mr-5">
                            <img className="rounded-full" src={perfil.avatar_path} />
                            <div className="text-center p-4">
                                <button
                                    type="button"
                                    className="py-1 px-2 bg-white border border-gray-300 rounded-md shadow-sm"
                                >
                                    Editar
                                </button>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <label htmlFor="github" className="block text-sm font-semibold text-gray-700">
                                GitHub
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    https://
                                </span>
                                <input
                                    type="text"
                                    name="github"
                                    id="github"
                                    className="p-1.5 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                    placeholder="github.com/johndoe"
                                />
                            </div>
                            <div className="col-span-4 mt-5">
                                <label htmlFor="perfil" className="block text-sm font-semibold text-gray-700">
                                    Perfil
                                </label>
                                <textarea
                                    id="perfil"
                                    name="perfil"
                                    rows={3}
                                    className="mt-1 p-1 h-36 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                    placeholder="Escreva algo sobre você..."
                                    defaultValue={''}
                                />
                            </div>
                            </div>
                            <div className="col-span-6 p-4">
                                <button
                                    type="button"
                                    className="float-right py-1 px-2 bg-green-600 text-white font-semibold rounded-md shadow-sm"
                                >
                                    Salvar
                                </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}