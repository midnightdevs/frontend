
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { ptBR } from 'date-fns/locale';
import BackendService from "../../services/api"

registerLocale('ptBR', ptBR)

export default function CurriculoForm(props) {
    const backendService = new BackendService()
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [empresaAtual, setEmpresaAtual] = useState(false)
    const [curriculo, setCurriculo] = useState({})
    useEffect(() => setCurriculo({ 
        data_inicio: startDate, data_saida: endDate, empresa_atual: empresaAtual }), [props])

    return (
        <form action="#" method="POST">
            <p className="capitalize text-left pb-5 text-lg font-bold">adicionar empresa</p>
            <div className="grid grid-cols-6 gap-6 drop-shadow">
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="nome" className="block text-sm font-semibold text-gray-700">
                        Empresa
                        <input
                            type="text"
                            name="empresa"
                            id="empresa"
                            autoComplete="empresa"
                            className="p-1.5 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            placeholder="digite o nome da empresa..."
                            onChange={(e) => setCurriculo({ ...curriculo, empresa: e.target.value })}
                        />
                    </label>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="nome" className="block text-sm font-semibold text-gray-700">
                        Trabalha atualmente nessa empresa?
                    </label>
                    <div className="text-left font-semibold py-1 italic">
                        <label>
                            sim
                            <input type="radio"
                                name="enterpriseName"
                                id="enterpriseName"
                                checked={empresaAtual}
                                onClick={() => setEmpresaAtual(true)}
                                className="m-2"
                                onChange={(e) => setCurriculo({ ...curriculo, empresa_atual: empresaAtual })}
                            />
                        </label>
                        <label>
                            não
                            <input type="radio"
                                name="enterpriseName"
                                id="enterpriseName"
                                value={'Empresa Atual'}
                                checked={!empresaAtual}
                                onClick={() => setEmpresaAtual(false)}
                                onChange={(e) => setCurriculo({ ...curriculo, empresa_atual: empresaAtual })}
                                className="m-2" />
                        </label>
                    </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="nome" className="block text-sm font-semibold text-gray-700">
                        Data Início
                        <div className="bg-white p-1 rounded w-2/3">
                            <DatePicker onSelect={(e) => setCurriculo({ ...curriculo, data_inicio: value })} locale={ptBR} dateFormat="P" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                    </label>
                </div>
                {!empresaAtual &&
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="nome" className="block text-sm font-semibold text-gray-700">
                            Data Saída
                            <div className="bg-white p-1 rounded w-2/3">
                                <DatePicker onSelect={(value) => setCurriculo({ ...curriculo, data_saida: value })} locale={ptBR} dateFormat="P" selected={endDate} onChange={(date) => setEndDate(date)} />
                            </div>
                        </label>
                    </div>}
                <div className="col-span-4">
                    <label htmlFor="resumo" className="block text-sm font-semibold text-gray-700">
                        Resumo
                    </label>
                    <textarea
                        id="resumo"
                        name="resumo"
                        rows={3}
                        className="mt-1 p-1 h-36 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Escreva suas experiências na empresa..."
                        defaultValue={''}
                        onChange={(e) => setCurriculo({ ...curriculo, resumo: e.target.value })}
                    />
                </div>
                <div className="col-span-6 p-4">
                    <button
                        type="button"
                        className="float-right py-1 px-2 bg-green-600 text-white font-semibold rounded-md shadow-sm"
                        onClick={() => backendService.adicionarEmpresa(curriculo)}
                    >
                        Adicionar
                    </button>
                </div>
            </div>
        </form>
    )
}