export async function getStaticPaths() {
    const resp = await fetch(`http://localhost:3000/api/alunos/tutores`)
    const ids = await resp.json()

    const paths = ids.map(id => {
        return { params: { id: `${id}` } }
    })

    return {
        //Fallback = false, significa que, quando vc passar um id diferente como parametro ele ira retornar o erro 404
        //Fallback = true, significa que ele irá pegar os parametros informados, mesmo que invalidos ou que não existam no backend
        fallback: true,
        //Gerar url's estaticas a partir destes alunos
        paths
    }
}

//getStaticProps existe um parametro chamado context, porem voce nao eh obrigado a usar
export async function getStaticProps({ params }) {
    const resp = await fetch(`http://localhost:3000/api/alunos/${params.id}`)
    const aluno = await resp.json()
    return {
        props: {
            aluno
        }
    }
}

export default function AlunoPorId(props) {
    const { aluno } = props
    return (
        <div>
            <h1>Detalhes do Aluno</h1>
            {aluno ?
                <ul>
                    <li>{aluno.id}</li>
                    <li>{aluno.nome}</li>
                    <li>{aluno.email}</li>
                </ul>
                : false
            }
        </div>
    )
}