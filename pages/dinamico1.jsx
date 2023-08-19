//Função com o nome padrão para gerar um componente dinamico, ou seja, sempre irá fazer req na api/server;
export function getServerSideProps(){
    console.log('[Server] gerando prosp para  componente...')
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Dinamico1(props) {
    return (
        <div>
            <h1>Dinamico #01</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}