import React from 'react'
import formGroup from '../components/form-group'

class Cadastro extends React.Component{
    render(){
            return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <form>
                                <fieldset>
                                    <formGroup />
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cadastro