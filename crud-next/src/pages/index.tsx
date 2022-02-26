import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useClients from "../hooks/useClients";

export default function Home(){

  const {
    client, 
    clients, 
    getAll, 
    newClient, 
    clientSelected, 
    clientSaved, 
    clientDeleted,
    visibleTable,
    showTable
  } = useClients()

  return (
    <div className={`
      flex justify-center items-center
      h-screen 
      bg-gradient-to-r from-indigo-600 via-green-300 to-indigo-600
    `}>
      <Layout title="Cadastro Simples">
        {visibleTable ? (
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
          <Form client={client} clientChange={clientSaved} cancel={() => showTable}/>
        )}
      </Layout>
    </div>
  )
}
