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
    try {
        const repo = await res.json()
        const user = await repo[context.params.id];
        return {
            props: { user }
        }
    } catch (error) {
        console.log("erro 1", error)
    }
})

export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=anime')
    try {
        const repo = await res.json()
        const users = await repo;
        const paths = users.map((user, index) => {
            return { params: { id: String(index) } };
        });
        return {
            paths,
            fallback: false,
        };
    } catch (error) {
        console.log("erro", error)
    }
}

export default Profile;
