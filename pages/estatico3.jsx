export function getStaticProps() {
    return {
        //Criado a partir da versão 9 do next.js, o revalidate é utilizado para atualizar o componente estático a cada 'x' segundos
        revalidate: 7, 
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico3(props) {
    return (
        <div>
            <h1>Estatico #03</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}