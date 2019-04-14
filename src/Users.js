import React, { Component } from 'react';
// import './Users.css'
class Users extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        const users = []

        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                data.results.forEach(userFromApi => {
                    const user = {
                        id: Math.random()*Math.random(),
                        pic: userFromApi.picture.medium,
                        name: userFromApi.name.first,
                        lastName: userFromApi.name.last,
                        mail: userFromApi.email
                    }
                    users.push(user)

                })
                    this.setState({ users })
             } )
    }
    // console.log(data)

    render() {
        return (

            <div >

                {this.state.users.map(user => (
                    
                        <div key={user.id} >
                        <img src={user.pic} alt="man from randomuserme" /> 
                        <div>{user.name}</div>
                        <div>{user.lastName}</div>
                        <div>{user.mail}</div>

                        </div>
                        
                    
                ))}

            </div>

        );
    }
}

export default Users