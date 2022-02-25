import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home(){

  const [client, setClient] = useState<Client>(Client.void())
  const [visible, setVisible] = useState<'table' | 'form'>('table')
  
  const clients = [
    new Client('Wenderson', 25, '1'),
    new Client('Danilo', 24, '2'),
    new Client('Yuri', 25, '3'),
    new Client('Christian', 24, '4'),
    new Client('Douglas', 24, '5'),
  ]

  function newClient(){
    setClient(Client.void())
    setVisible('form')
  }

  function clientSelected(client: Client){
    setClient(client)
    setVisible('form')
  }

  function clientSaved(client: Client){
    console.log(client)
    setVisible('table')
  }

  function clientDeleted(client: Client){
    console.log(`Excluindo: ${client.name}`)
  }


  return (
    <div className={`
      flex justify-center items-center
      h-screen 
      bg-gradient-to-r from-indigo-600 via-green-300 to-indigo-600
    `}>
      <Layout title="Cadastro Simples">
        {visible === 'table' ? (
          <>
            <div className={`flex justify-end`}>
              <Button color="green" className={`mb-3`} onClick={newClient}>Novo Cliente</Button>
            </div>
            <Table
              clients={clients}
              clientSelected={clientSelected}
              clientDeleted={clientDeleted}
            />
          </>
        ) : (
          <Form client={client} clientChange={clientSaved} cancel={() => setVisible('table')}/>
        )}
      </Layout>
    </div>
  )
}
