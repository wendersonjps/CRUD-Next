import Layout from "../../components/Layout"
import {useRouter} from "next/router"

export default function CustomerPerCode(){
    const router =  useRouter()
    
    return (
        <Layout title="Navegação dinâmica">
            <span>Código = {router.query.code}</span>
        </Layout>
    )
}