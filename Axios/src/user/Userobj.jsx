import React from 'react';
import Axios from 'axios'

class Userobj extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users : {},
        }
    }

    componentDidMount(){
        Axios.get('https://dummyjson.com/users')
             .then((response) => {
                this.setState({users : response.data});
             })   
             .catch((error) => {
                console.log(error);
             })   
    }


    render(){
        return(
            <React.Fragment>
                 <div className='container'>
                <h3>User Component</h3>
                <pre>{JSON.stringify(this.state.users)}</pre>
                <div className="row">
                    <div className="col-md-10">
                        <table className='table'>
                            <thead className='bg-primary text-white'>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>City</th>   
                                    <th>Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(this.state.users).length > 0 ?
                                        <>
                                            {
                                                this.state.users.users.map((users) => {
                                                    return <tr>
                                                        <td>{users.id}</td>
                                                        <td>{users.lastName}</td>
                                                        <td>{users.age}</td>
                                                        <td>{users.address.city}</td>
                                                        <td><img src={users.image} height={'40px'} /></td>
                                                    </tr>
                                                })
                                            }
                                        </> : <h3>
                                            No Data
                                        </h3>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            </React.Fragment>
        )
    }

}
export default  Userobj 