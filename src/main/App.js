import React from 'react'
import Rotas from './rotas'

import 'toastr/build/toastr.min.js'

import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'
import 'toastr/build/toastr.css'


class App extends React.Component {
  render(){
    return(
      <div>
        <Rotas />
      </div>
    )
  }
}


export default App;
