import Layout from "../components/Layout"

export default function Jsx(){
    const title = <h1>JSX - Um conceito central</h1>

    function functionTest(){
        return <h3>Podemos inserir também uma função!</h3>
    }

    return (
        <Layout title="Explicando o JSX">
            <div>
                {title}

                <h2>JSX é uma extensão de sintaxe para JavaScript. É semelhante a uma linguagem de template, mas com todo o poder do JavaScript. JSX é compilado para chamadas React.createElement () que retornam objetos JavaScript simples chamados “elementos React”.</h2>

                {functionTest()}

                {Math.random()}
            </div>
        </Layout>
    )
}