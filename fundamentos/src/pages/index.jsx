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
            <Nav text="Componente com Estado" destiny="/state"></Nav>
            <Nav text="Integração API #01" destiny="/integration"></Nav>
        </div>
    )
}