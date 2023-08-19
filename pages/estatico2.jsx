//Se este metodo estiver criado, o compilador identifica que será utilizado objetos estaticos como propriedade
// Executando no npm run dev ele irá alterar o valor ao dar refresh, porem utilizando no npm run build, ele não irá permitir
export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico2(props) {
    return (
        <div>
            <h1>Estatico #02</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}