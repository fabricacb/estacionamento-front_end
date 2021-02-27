import React from 'react'

class formGroup extends React.Component{
    render(){
        return(
            <div className="form-group">
                <label for="exampleInputEmail1">Nome: *</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite o Nome"></input>
            </div>
        )
    }
}

export default formGroup