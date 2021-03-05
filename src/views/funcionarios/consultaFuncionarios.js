import React from 'react'
import { withRouter } from 'react-router-dom' 
import Card from '../../components/card';
import FormGroup from '../../components/form-group'
import Table from './table'

class ConsultaFuncionarios extends React.Component{


    
    
    render(){

        const funcionarios = [
            { nome : 'alefe', email : 'alefepdias@gmail.com', numero : 1}
        ]

        return(
            <Card title="Consultar Funcionarios">
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <FormGroup>

                            </FormGroup>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <Table funcionarios={funcionarios}/>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(ConsultaFuncionarios);