import {useState} from 'react'
import Layout from '../components/Layout'

export default function Integration() {

    const [code, setCode] = useState(1)
    const [client, setClient] = useState({})

    function getClient(){
        fetch(`http://localhost:3000/api/customers/${code}`)
            .then(resp => resp.json())
            .then(data => setClient(data))
    }

    return (
        <Layout>
            <div>
                <input type="number" value={code} onChange={e => setCode(e.target.value)}/>
                <button onClick={setClient}>Obter Cliente</button>
            </div>
            <ul>
                <li>Código:{client.id}</li>
                <li>Nome:{client.name}</li>
                <li>Idade:{client.age}</li>
            </ul>
        </Layout>
    )
}