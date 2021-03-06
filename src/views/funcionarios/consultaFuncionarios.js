import React from 'react'
import { withRouter } from 'react-router-dom' 
import Card from '../../components/card';
import FormGroup from '../../components/form-group'
import Table from './table'
import FuncionarioService from '../../app/service/funcionarioService'
import { mensagemSucesso } from '../../components/toastr'
import { mensagemErro} from '../../components/toastr'

class ConsultaFuncionarios extends React.Component{


    state = {
        funcionarios: []
    }

    constructor(){
        super();
        this.service = new FuncionarioService();
    }

    buscar = () => {
        this.service.consultar()
        .then(resposta => {
            this.setState({ funcionarios : resposta.data })
        }).then(erro => {

        })

        console.log(this.state)
    }
    
    editar = (id) => {
        console.log('editando o funcionario', id)
    }

    deletar = (funcionario) => {
        this.service
        .deletar(funcionario.id)
        .then(response => {
            const funcionarios = this.state.funcionarios;
            const index = funcionarios.indexOf(funcionario)

            funcionarios.slice(index, 1)
            this.setState(funcionarios)
            mensagemSucesso('Funcionario deletado com sucesso!')
        }).catch(error => {
            mensagemErro(' Erro ao deletar funcionario!')
        })
    }

    render(){
        return(
            <Card title="Consultar Funcionarios">
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <FormGroup>

                            </FormGroup>
                            <button onClick={this.buscar} type="button" className="btn btn-success">Buscar</button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <Table funcionarios={this.state.funcionarios} 
                            deleteAction={this.deletar}
                            editAction={this.editar}/>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(ConsultaFuncionarios);