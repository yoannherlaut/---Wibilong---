import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class UsersList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: null,
        };
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    users: data
                })
            })
    }

    render() {
        const { users } = this.state;

        return (
            <div style={styles.container}>
                {
                    users && users.map(user => {
                        return (
                            <div style={styles.poeple} key={user.id} >
                                <p>{user.name}</p>
                            </div>
                        )
                    })
                }
                <Link to='/' >
                    <button style={styles.links} >Return to Home</button>
                </Link>
            </div>
        )
    }
}


const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center',
        flewWrap: 'wrap'
    },
    poeple: {
        fontSize: 20
    },
    links: {
        height: 50,
        fontSize: 18,
        borderRadius: 10,
        backgroundColor: '#313646',
        color: '#fff',
    }
}

