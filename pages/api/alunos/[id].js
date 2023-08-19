export default function handler(req, res) {
    const id = +req.query.id //Nome do arquivo
    res.status(200).json({
        id,
        nome: `Rafael Colaço ${id}`,
        email: `afae9000${id}@gmail.com`
    })
}