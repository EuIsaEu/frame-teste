import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

function Users({ users }) {
    return (
        <div>
            <h1> Lista de Usuários </h1>
            {users.map((user, index) => (
                <Link href='/profile/[id]' as={`/profile/${index}`}>
                    <div key={user.id}> <p> {user.name} </p> </div>
                </Link>
            ))}
        </div>
    )
}

export const getStaticProps = (async (context) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const repo = await res.json()
    const users = await repo;
    return {
        props: { users }
    }
})

export default Users;