import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js'

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title> NinomaeWeb </title>
      </Head>
      <Header></Header>

      <div id={styles.banner}>
        <div>
          <h1> O que é o bocaWeb? </h1>
          <p>O BocaWeb é um portal onde pessoas com deficiência visual terão acesso a informações contidas em imagens por meio de audiodescrição.<br></br>Estamos formando um grande grupo de colaboradores voluntários para criar objetos em audiodescrição.</p>
        </div>
        <div id={styles.divImg}>
          <img id={styles.tako} src='ina-banner.png'></img>
        </div>
      </div>

      <div id={styles.irObjetos}>
        <img id={styles.inaHappy} src='ina-happy.png'></img>
        <div id={styles.irObjetosTexto}>
          <h2>O BocaWeb é um site que permite o acesso a Objetos Digitais em Audiodescrição</h2>
          <p>Um <b>O</b>bjeto <b>D</b>igital em <b>A</b>udidescrição (<b>ODA</b>) consiste em uma imagem estática, textos descritivos da imagem e arquivos de áudio com a descrição da imagem. Esses três elementos conectados representam um ODA.</p><br></br>
          <p>O BocaWeb é produto da pesquisa de doutoramento de <b>Ricardo Nascimento</b>, no Programa de Pós-Graduação em Educação da UFGD - Universidade Federal da Grande Dourados. O projeto é feito em parceria com o <b>IFMS</b> - Instituto Federal do Mato Grosso do Sul.</p>
          <div id={styles.linkObj}>
            <a href="\objetos"> Visitar objetos</a>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}