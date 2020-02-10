import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class PhotosList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            photos: null,
        };
    }

    componentDidMount() {
        this.getPhotos()
    }

    getPhotos() {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    photos: data.slice(0, 10)
                })
            })
    }

    render() {
        const { photos } = this.state;

        return (
            <div>
                {
                    photos && photos.map(photo => {
                        return (
                            <div style={styles.photosContainer}>
                                <p>{photo.title}</p>
                                <img src={photo.thumbnailUrl} alt='thumbnailUrl' />
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
    photosContainer: {
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
