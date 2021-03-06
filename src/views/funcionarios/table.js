import React from "react"

export default props => {

    
    const rows = props.funcionarios.map( funcionario => {
        return(
            <tr key={funcionario.id}>
                <td>{funcionario.nome}</td>
                <td>{funcionario.email}</td>
                <td>{funcionario.id}</td>
                <td>
                    <button type="button" 
                    className="btn btn-primary"
                    onClick={e => props.editAction(funcionario.id)}>Editar</button>

                    <button type="button" 
                            className="btn btn-danger" 
                            onClick={e => props.deleteAction(funcionario)}>Deletar</button>
                </td>
            </tr>
        )
    })

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Numero</th>
                    <th scope="col">Nome</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}