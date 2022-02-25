import Client from "../core/Client"
import { deleteIcon, editIcon } from "./Icons"

interface TableProps{
    clients: Client[]
    clientSelected?: (client: Client) => void
    clientDeleted?: (client: Client) => void
}

export default function Table(props: TableProps){

    const showActions = props.clientDeleted || props.clientSelected

    function renderHeader(){
        return (
            <tr>
                <th className={`text-left p-2`}>Código</th>
                <th className={`text-left p-2`}>Nome</th>
                <th className={`text-left p-2`}>Idade</th>
                {showActions ? <th className={`text-center p-2`}>Ações</th> : false}
            </tr>
        )
    }

    function renderData(){
        return props.clients?.map((client, i) => {
            return (
                <tr key={client.id} className={`${i % 2 === 0 ? 'bg-blue-50' : 'bg-blue-100'}`}>
                    <td className={`text-left p-2`}>{client.id}</td>
                    <td className={`text-left p-2`}>{client.name}</td>
                    <td className={`text-left p-2`}>{client.age}</td>
                    {showActions ? renderActions(client) : false}
                </tr>
            )
        })
    }

    function renderActions(client: Client){
        return (
            <td className={`flex justify-center`}>
                {props.clientSelected ? (
                    <button onClick={() => props.clientSelected?.(client)} className={`
                    flex justify-center item-center
                    text-green-500 rounded-full
                    p-2 m-2
                    hover:bg-white
                `}>
                        {editIcon}
                    </button>
                ) : false}

                {props.clientDeleted ? (
                    <button onClick={() => props.clientDeleted?.(client)} className={`
                    flex justify-center item-center
                    text-red-500 rounded-full
                    p-2 m-2
                    hover:bg-white
                `}>
                        {deleteIcon}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className={`w-full rounded-xl overflow-hidden`}>
            <thead className={`
            bg-blue-500
            text-white
            `}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}