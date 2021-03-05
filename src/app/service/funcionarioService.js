import ApiService from '../apiservice'

class FuncionarioService extends ApiService{

    constructor(){
        super('/funcionarios')
    }

    autenticar(credenciais){
        return this.post('/autenticar', credenciais)
    }

    salvar(funcionario){
        return this.post('/', funcionario);
    }

  
}

export default FuncionarioService