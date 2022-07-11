// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import BackendService from '../services/api'

export default function Home() {
  const [perfil, setPerfil] = useState({})  

  useEffect(() => {
    const backendService = new BackendService()
    backendService.getPerfil('johndoe@gmail.com').then((res) => {
      setPerfil(res)
    })
  }, []);

  return (
    <>
      <h1>Hello {perfil.nome} {perfil.sobrenome}</h1>
      <img src={perfil.avatar_path} />
    </>
  )
}
