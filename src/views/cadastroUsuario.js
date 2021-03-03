import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import { withRouter } from 'react-router-dom'
import { mensagemErro } from '../components/toastr'

import FuncionarioService from '../app/service/funcionarioService'


class Cadastro extends React.Component{

    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }

    constructor(){
    super();
    this.service = new FuncionarioService();
    }

    cadastrar = () => {

        const funcionario = {
            nome : this.state.nome,
            email: this.state.email,
            senha : this.state.senha
        }

       this.service.salvar(funcionario)
            .then( response => {
                this.props.history.push('/login')
            }).catch(error => {
                mensagemErro(error.response.data)
            })
    }

    prepararLogin = () => {
        this.props.history.push('/login')
    }

    render(){
        return(
            <div className="container">
                <Card title="Pagina de cadastro">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bs-component">
                                <FormGroup label="Nome: *" htmlFor="inputNome">
                                    <input type="text" 
                                    id="inputNome" 
                                    className="form-control"
                                    name="nome"
                                    onChange={e => this.setState({nome: e.target.value})}/>
                                </FormGroup>
                                <FormGroup label="Email: *" htmlFor="inputEmail">
                                    <input type="text" 
                                    id="inputEmail" 
                                    className="form-control"
                                    name="email"
                                    onChange={e => this.setState({email: e.target.value})}/>
                                </FormGroup>
                                <FormGroup label="Senha: *" htmlFor="inputSenha">
                                    <input type="password" 
                                    id="inputSenha" 
                                    className="form-control"
                                    name="senha"
                                    onChange={e => this.setState({senha: e.target.value})}/>
                                </FormGroup>
                                <FormGroup label="Repita senha: *" htmlFor="inputRepitaSenha">
                                    <input type="password" 
                                    id="inputRepitaSenha" 
                                    className="form-control"
                                    name="senha"
                                    onChange={e => this.setState({senhaRepeticao: e.target.value})}/>
                                </FormGroup>
                                <button onClick={this.cadastrar} type="button" className="btn btn-success">Salvar</button>
                                <button onClick={this.prepararLogin} type="button" className="btn btn-danger">Voltar</button>
                            </div>
                        </div>
                    </div>
            </Card>
            </div>             
        )
    }
}

export default withRouter( Cadastro )