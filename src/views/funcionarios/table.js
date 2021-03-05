import React from "react"

export default props => {

    
    const rows = props.funcionarios.map( funcionario => {
        return(
            <tr>
                <td>{funcionario.nome}</td>
                <td>{funcionario.email}</td>
                <td>{funcionario.numero}</td>
            </tr>
        )
    })

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Numero</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}