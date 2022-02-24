import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home(){

  const clients = [
    new Client('Wenderson', 25, '1'),
    new Client('Danilo', 24, '2'),
    new Client('Yuri', 25, '3'),
    new Client('Christian', 24, '4'),
    new Client('Douglas', 24, '5'),
  ]

  function clientSelected(client: Client){
    console.log(client.name)
  }

  function clientDeleted(client: Client){
    console.log(`Excluindo ${client.name}`)
  }

  return (
    <div className={`
      flex justify-center items-center
      h-screen 
      bg-gradient-to-r from-blue-700 to-green-500
    `}>
    <Layout title="Cadastro Simples">
      <Table clients={clients} clientSelected={clientSelected} clientDeleted={clientDeleted}></Table>
    </Layout>
    </div>
  )
}
