import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div style={styles.containerLinks}>
                <Link to='/users' >
                    <button style={styles.links} >Users</button>
                </Link>
                <Link to='/albums' >
                    <button style={styles.links} >Albums</button>
                </Link>
                <Link to='/photos' >
                    <button style={styles.links} >Photos</button>
                </Link>
                <Link to='/posts' >
                    <button style={styles.links} >Posts</button>
                </Link>
            </div>
        )
    }
}


const styles = {
    containerLinks: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    links: {
        height: 50,
        width: 100,
        fontSize: 18,
        borderRadius: 10,
        backgroundColor: '#313646',
        color: '#fff',
    }
}
