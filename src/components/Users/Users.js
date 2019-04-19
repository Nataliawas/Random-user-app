import React, { Component } from 'react';
import './Users.css'


class Users extends Component {

    state = {
        users: []
    }


    fetchUsers = () => {
        const users = []

        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(data => {
                console.log('data', data)
                console.log('results', data.results)
                users.push(...data.results)
                this.setState({ users })
            })

        console.log('users', users)

        console.log('state', this.state.users)
    }



    renderUsers = () => {
        return this.state.users.map(user => (

            <div key={Math.random() * Math.random()} className="user-tile">
                <div className="img-container">
                    <img src={user.picture.large} alt="man from randomuserme" />
                </div>
                <div className="data-container">
                    <div>Imię: {user.name.first}</div>
                    <div>Nazwisko: {user.name.last}</div>
                    <div>E-mail: {user.email}</div>
                </div>
            </div>
           
        ))
    }


    componentDidMount() {

        this.fetchUsers()

    }



    render() {
        return (
            <div>
                <div className="button-container">
                    <button type="button" onClick={this.fetchUsers}>RENDER USERS</button>
                </div>
                <div>
                    {this.renderUsers()}
                </div>
            </div>

        )
    }
}

export default Users