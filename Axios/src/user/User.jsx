import React, { Component } from 'react'
import Axios from 'axios'

 class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users')
             .then((response) => {
                this.setState({users: response.data})
                console.log(response.data);
             })
             .catch((error) => {
                console.log(error)

             })
    }

    render() {
      return (
         <React.Fragment>
             <div className="container mt-5 " ></div>
             <div className="row"></div>
             <h4> Users:<pre>{JSON.stringify(this.state.users)} </pre> </h4>
             {
             this.state.users.length > 0 ? <React.Fragment>
                <div className="col-md-8">
                    <table className=' table table-hover'>
                        <tr className='bg-dark text-white'>
                            <th> ID</th>
                            <th>NAME</th>
                            <th>Email</th>
                            <th> CITY</th>
                        </tr>
                        <tbody>
                           {
                            this.state.users.map((user)=>{
                                return <tr> 
                                    <td>(user.id) </td>
                                    <td>(user.name) </td>
                                    <td>(user.email) </td>
                                    <td>(user.address.city) </td>
                                </tr>
                            })
                           }
                        </tbody>
                    </table> 
                </div>
             </React.Fragment> : null
             }
         </React.Fragment>
    )
  }
}
export default User
