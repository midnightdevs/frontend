import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BackendService from '../services/api'

export default function Home() {
  const backendService = new BackendService()
  backendService.getPerfil()
  return (
    <h1>Hello World</h1>
  )
}
