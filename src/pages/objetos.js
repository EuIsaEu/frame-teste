import React from 'react';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js'
import styles from '../styles/Objetos.module.css';
import Link from 'next/link';

function Users({ users }) {
    return (
        <div>
            <Header></Header>
            <title>Objetos</title>

            <div id={styles.contend}>
                <h1> Lista dos objetos </h1>
                <div id={styles.lista}>
                    <ol>
                        {users.map((user, index) => (
                            <li>
                                <Link href='/profile/[id]' as={`/profile/${index}`}>
                                    <div key={user.usuario}> <p> {user.nome} </p> </div>
                                </Link>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=anime')
    const repo = await res.json()
    const users = await repo;
    return {
        props: { users }
    }
})

export default Users;