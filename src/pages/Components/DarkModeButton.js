import styles from '../../styles/Components.module.css';

export default function darkModeButton(){
    function mudar () {
        const elem = document.querySelector('html');

        if (elem.style.colorScheme == 'dark') {
            elem.style.colorScheme = 'light';
        } else {
            elem.style.colorScheme = 'dark';
        }
    }

    return(
        <>
            <img id={styles.darkMode} src="/dark-mode.png" onClick={mudar}></img>
        </>
    )
}