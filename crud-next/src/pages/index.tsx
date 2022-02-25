import Button from "../components/Button";
import Form from "../components/Form";
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
      bg-gradient-to-r from-indigo-600 via-green-300 to-indigo-600
    `}>
      <Layout title="Cadastro Simples">
        <div className={`flex justify-end`}>
          <Button color="green" className={`mb-3`}>Novo Cliente</Button>
        </div>
        <Table
          clients={clients}
          clientSelected={clientSelected}
          clientDeleted={clientDeleted}
        ></Table>
        <Form client={clients[0]}></Form>
      </Layout>
    </div>
  )
}
