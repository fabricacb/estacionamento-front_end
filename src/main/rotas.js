import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom' 
import Login from '../views/login'
import CadastroUsuario from '../views/cadastroUsuario'
import ConsultaFuncionarios from '../views/funcionarios/consultaFuncionarios'

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={CadastroUsuario} />
                <Route path="/consultafuncionario" component={ConsultaFuncionarios} />
            </Switch>
        </HashRouter>
    )
}

export default Rotas