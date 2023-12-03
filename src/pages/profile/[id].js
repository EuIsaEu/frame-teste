import styles from '../../styles/Home.module.css';

function Profile({ user = {} }) {
    return (
        <div>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.username}</p>
        </div>
    )
}

export const getStaticProps = (async (context) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const repo = await res.json()
    const user = await repo[context.params.id];
    return {
        props: { user }
    }
})

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
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
