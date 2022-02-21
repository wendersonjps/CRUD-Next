import styles from '../styles/style.module.css'
import Link from 'next/link'

export default function Style(){
    return (
        <div className={styles.azul}>
            <Link href="/">Voltar</Link>
            <h1>Usando CSS module</h1>
        </div>
    )
}