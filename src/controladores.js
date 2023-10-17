const instanciaAxios = require("./api")
const apiKey = require("./apiKey")

const consultaEmpresa = async (req, res)=> {
    const {domain} = req.query
    
    if(!domain){
        return res.status(400).json({mensagem: "obrigatorio preencher dominio"})
    }
    
    try {
        const query = (`?api_key=${apiKey}&domain=${domain}`)
        const consulta = await instanciaAxios.get(query);
        if (!consulta.data.name){
            return res.status(400).json({mensagem: "Dominio inexistente"})
        }
        return res.status(200).json(consulta.data)
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({mensagem: "Erro interno do Servidor"})
    }
}

module.exports = consultaEmpresa