import Nav from '../components/Nav'
import styles from '../styles/home.module.css'

export default function Home(){
    return (
        <div className={styles.home}>
            <Nav text="CSS Module" destiny="/style"></Nav>
            <Nav text="Exemplo" destiny="/app"></Nav>
            <Nav text="JSX" destiny="/jsx"></Nav>
            <Nav text="Navegação #01" destiny="/navigation"></Nav>
            <Nav text="Navegação #02" destiny="/customer/123"></Nav>
            <Nav text="Componente Estado" destiny="/state"></Nav>
            <Nav text="Integração API" destiny="/integration"></Nav>
            <Nav text="Conteúdo Estático" destiny="/static"></Nav>
        </div>
    )
}