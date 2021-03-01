import React from 'react'
import 'bootswatch/dist/flatly/bootstrap.css'
import Cadastro from './views/cadastroUsuario'
import Login from './views/login'

class App extends React.Component {
  render(){
    return(
      <div>
        <Login />
        <Cadastro />
      </div>
    )
  }
}

export default App;
