import styles from '../../styles/Descricao.module.css';
import Header from '../Components/Header.js';

function Profile({ user = {} }) {
    return (
        <>
            <Header></Header>
            <title>{user.nome}</title>
            <div className={styles.descricao}>
                <div>
                    <p id={styles.nome}>{user.nome}</p>
                    <p id={styles.usuario}>{user.usuario}</p>
                    <p id={styles.descricao}>{user.descricao}</p>
                    <a href='/objetos'>Voltar aos objetos</a>
                </div>
            </div>
        </>
    )
}

export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=anime')
    const repo = await res.json()
    const user = await repo[context.params.id];
    return {
        props: { user }
    }
})

export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=anime')
    const repo = await res.json()
    const users = await repo;
    const paths = users.map((user, index) => {
        return { params: { id: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };
}

export default Profile;
