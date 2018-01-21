import React from 'react'

export default class SomeTenants extends React.Component {
    render(){
        const tenantData = this.props.tenantData
        // .map((tenant) => {
        //     return 
        //         // <h1>{todo.title}</h1>
        //         <tbody>
        //         <tr>
        //             <td>{tenant.property}</td>
        //             <td>3A</td>
        //             <td>{tenant.name}</td>
        //             <td>{tenant.phone_number}</td>
        //         </tr>
        //         </tbody>
        // })
        // let todos = this.props.todos.map((todo) => {return <h1>{todo.title}</h1>})
        	
        console.log(tenantData)
        return(
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Property</th>
                        <th>House No</th>
                        <th>Tenant Name</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Court Peaky</td>
                        <td>3A</td>
                        <td>David Mwangi</td>
                        <td>Paid</td>
                    </tr>
                    {tenantData.map((item)=>

                        <tr>
                            <td>{item.property}</td>
                            <td>3A</td>
                            <td>{item.name}</td>
                            <td>{item.phone_number}</td>
                        </tr>

                    )}
                </tbody>
            </table>
        )
    }
}