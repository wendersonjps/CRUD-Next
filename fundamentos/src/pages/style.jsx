import styles from '../styles/style.module.css'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Style(){
    return (
        <Layout title="Exemplo de CSS Modularizado">
            <div className={styles.azul}>
                <h1>Usando CSS module</h1>
            </div>
        </Layout>
    )
}