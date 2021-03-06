import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import { withRouter } from 'react-router-dom' 
import FuncionarioService from '../app/service/funcionarioService'
import { mensagemErro } from '../components/toastr'
class Login extends React.Component{
    state = {
        email: '',
        senha: ''
    }

    constructor(){
        super();
        this.service = new FuncionarioService();
    }

    entrar = () => {
        this.service.autenticar({
            email: this.state.email,
            senha: this.state.senha
        }).then ( response => {
            this.props.history.push('/consultafuncionario')
        }).catch( erro => {
            mensagemErro(erro.response.data)
        })
    }

    prepararCadastrar = () => {
        this.props.history.push('/cadastro')
    }
    
    render(){
        return(
        <div className="container">
            <div className="row">
                <div className="col-md-6" style={ {position : "relative", left: '300px'} }>
                    <Card title="Login">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bs-component">
                                    <fieldset>
                                        <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                                            <input type="email" value={this.state.email} 
                                                    onChange={e=> this.setState({email: e.target.value})}
                                                    className="form-control" id="exampleInputEmail1" 
                                                    aria-describedby="emailHelp" placeholder="Digite o Email" />
                                        </FormGroup>

                                        <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                                            <input type="password" value={this.state.senha}
                                                    onChange={e=> this.setState({senha: e.target.value})}
                                                    className="form-control" 
                                                    id="exampleInputPassword1" placeholder="Password" />
                                        </FormGroup>

                                        <button onClick={this.entrar} className="btn btn-success">Entrar</button>
                                        <button onClick={this.prepararCadastrar} className="btn btn-danger">Cadastrar</button>
                                        <br />
                                        <a href="http://localhost:3000/#/login">Esqueci minha senha.</a>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
        )
    }
}

export default withRouter( Login )
