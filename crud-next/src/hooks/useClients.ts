import { useEffect, useState } from "react";
import ClientCollection from "../backend/database/ClientCollection";
import Client from "../core/Client";
import ClientRepository from "../core/ClientRepository";
import useTableForm from "./useTableForm";

export default function useClients() {
    const rep: ClientRepository = new ClientCollection()

    const {visibleTable, showForm, showTable} = useTableForm()

    const [client, setClient] = useState<Client>(Client.void())
    const [clients, setClients] = useState<Client[]>([])

    useEffect(getAll, [])

    function getAll() {
        rep.getAll().then(clients => {
            setClients(clients)
            showTable()
        })
    }

    function newClient() {
        setClient(Client.void())
        showForm()
    }

    function clientSelected(client: Client){
        setClient(client)
        showForm()
    }

    async function clientSaved(client: Client){
        await rep.save(client)
        getAll()
    }

    async function clientDeleted(client: Client){
        await rep.delete(client)
        getAll()
    }

    return {
        client,
        clients,
        getAll,
        newClient,
        clientSelected,
        clientSaved,
        clientDeleted,
        visibleTable,
        showTable
    }
}