import Layout from "../components/Layout";

export default function Home(){
  return (
    <div className={`
      flex 
      justify-center 
      items-center
      h-screen 
      bg-gradient-to-r from-blue-700 to-green-500
    `}>

    <Layout title="Cadastro Simples">
      <span>Conteúdo</span>
    </Layout>
    </div>
  )
}
