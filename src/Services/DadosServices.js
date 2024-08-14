import DadosRepositories from "../Repositories/DadosRepositories.js";

async function encontrarDados(authorization){

    const token = authorization.replace("Bearer ", ""); // tem que ter um espaço apos o Bearer
    const tokenBd = await DadosRepositories.verificaToken(token);

   
    if (tokenBd[0].length === 0) {
        throw new Error('Token inválido');
    }
    
 
    const todosDados = await DadosRepositories.encontrarDados()
    if (todosDados.length === 0) throw new Error('Não há dados inclusos no banco de dados');
    
        return todosDados;
}


export default {
    encontrarDados
}