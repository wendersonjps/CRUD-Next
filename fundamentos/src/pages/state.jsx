import { useState } from "react";
import Layout from "../components/Layout";

export default function Condition(){
    const [number, setNumber] = useState(0)

    function increment(){
        setNumber(number + 1)
    }

    return (
        <Layout title="Componente com estado">
            <div>{number}</div>
            <button onClick={increment}>Incrementar</button>
        </Layout>
    )
}