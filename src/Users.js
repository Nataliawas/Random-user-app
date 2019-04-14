import React, { Component } from 'react';
import './Users.css'


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
                        id: Math.random() * Math.random(),
                        pic: userFromApi.picture.large,
                        name: userFromApi.name.first,
                        lastName: userFromApi.name.last,
                        mail: userFromApi.email
                    }
                    users.push(user)

                })
                this.setState({ users })
            })
    }
    // console.log(data)

    render() {
        return (

            <div className="user-containers">

                {this.state.users.map(user => (

                    <div key={user.id} className="user-tile">
                        <div clasName="img-container">
                            <img src={user.pic} alt="man from randomuserme" />
                        </div>
                        <div className="data-container">
                            <div>Imię: {user.name}</div>
                            <div>Nazwisko: {user.lastName}</div>
                            <div>E-mail: {user.mail}</div>
                        </div>
                    </div>


                ))}

            </div>

        );
    }
}

export default Users