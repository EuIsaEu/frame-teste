import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title> Projeto SSG </title>
      </Head>
      <h1> Projeto Usuários </h1>
      <a href="\users"> Abrir usuários </a>
    </div>
  )
}