import React from "react"

export default props => {

    const rows = props.funcionarios.map( funcionario => {
        return(
            <tr>
                <td>{funcionarios.nome}</td>
                <td>{funcionarios.email}</td>
                <td>{funcionarios.numero}</td>
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