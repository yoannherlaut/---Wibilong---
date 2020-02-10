import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class PostsList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: null,
        };
    }

    componentDidMount() {
        this.getPosts()
    }

    getPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    posts: data.slice(0, 10)
                })
            })
    }

    render() {
        const { posts } = this.state;

        return (
            <div>
                {
                    posts && posts.map(post => {
                        return (
                            <div>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
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
    posts: {
        fontSize: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    links: {
        height: 50,
        fontSize: 18,
        borderRadius: 10,
        backgroundColor: '#313646',
        color: '#fff',
    }
}
