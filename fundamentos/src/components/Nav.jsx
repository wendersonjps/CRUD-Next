import Link from 'next/link'
import styles from '../styles/nav.module.css'

export default function Nav(props){
    return (
        <Link href={props.destiny} passHref>
            <div className={styles.nav}>
                {props.text}
            </div>
        </Link>
    )
}