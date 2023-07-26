import styles from './MainNav.module.css'

export default function MainNav (props) {
    function gotoMain () {
        props.navigate('main');
    }

    function gotoJournal () {
        props.navigate('journal');
    }
    
    function gotoMeme () {
        props.navigate('meme');
    }

    return (
        <nav className={styles.mainnav}>
            <button className={styles.mainnav__button} type="button" onClick={gotoMain}>Main</button>
            <button className={styles.mainnav__button} type="button" onClick={gotoJournal}>travel journal</button>
            <button className={styles.mainnav__button} type="button" onClick={gotoMeme}>Meme Generator</button>
        </nav>
    )
}