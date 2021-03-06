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

    consultar(){
        return this.get('');
    }

    deletar(id){
        return this.delete(`/${id}`)
    }
}

export default FuncionarioService