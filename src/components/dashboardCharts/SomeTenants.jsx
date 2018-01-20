import React from 'react'

export default class SomeTenants extends React.Component {
    render(){
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
                    <tr>
                        <td>Court Peaky</td>
                        <td>2A</td>
                        <td>Toel Apiut</td>
                        <td>Not paid</td>
                    </tr>                    
                    <tr>
                        <td>Court Peaky</td>
                        <td>1A</td>
                        <td>Nish Ndungu</td>
                        <td>Paid</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}