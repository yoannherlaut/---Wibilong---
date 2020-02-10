import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class AlbumsList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            albums: null,
        };
    }

    componentDidMount() {
        this.getAlbums()
    }

    getAlbums() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    albums: data.slice(0, 10)
                })
            })
    }

    render() {
        const { albums } = this.state;

        return (
            <div style={styles.container}>
                {
                    albums && albums.map(album => {
                        return (
                            <div style={styles.album} key={album.id} >
                                <p>{album.title}</p>
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
        paddingTop: 30,
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center',
        flewWrap: 'wrap'
    },
    album: {
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

