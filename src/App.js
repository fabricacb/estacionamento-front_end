import React from 'react'
import 'bootswatch/dist/flatly/bootstrap.css'
import Cadastro from './views/cadastroUsuario'

class App extends React.Component {
  render(){
    return(
      <div>
        <Cadastro />
        <formGroup />
      </div>
    )
  }
}

export default App;
