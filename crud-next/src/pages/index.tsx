import { useEffect, useState } from "react";
import ClientCollection from "../backend/database/ClientCollection";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import ClientRepository from "../core/ClientRepository";

export default function Home(){

  const rep: ClientRepository = new ClientCollection()

  const [client, setClient] = useState<Client>(Client.void())
  const [clients, setClients] = useState<Client[]>([])
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  useEffect (getAll, [])
  
  function getAll(){
    rep.getAll().then(clients => {
      setClients(clients)
      setVisible('table')
    })
  }

  function newClient(){
    setClient(Client.void())
    setVisible('form')
  }

  function clientSelected(client: Client){
    setClient(client)
    setVisible('form')
  }

  async function clientSaved(client: Client){
    await rep.save(client)
    getAll()
  }

  async function clientDeleted(client: Client){
    await rep.delete(client)
    getAll()
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
