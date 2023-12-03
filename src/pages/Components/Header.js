import styles from '../../styles/Components.module.css';
import DarkModeButton from './DarkModeButton.js';

export default function Header() {
    return (
        <div className={styles.header}>
            <img id={styles.takodachi} src='takodachi.webp'></img>
            <a href='/'><h1>NinomaeTalks</h1></a>
            <DarkModeButton></DarkModeButton>
        </div>
    )
}