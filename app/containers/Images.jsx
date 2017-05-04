import React from 'react';
import axios from 'axios';

import ImagesList from '../components/ImagesList';
import CreateImageForm from '../components/CreateImageForm';

export default class Images extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: []
        }
    }

    componentDidMount() {
        //this.getAuthors();
    }

    getImages() {
        // axios.get('/api/getauthors')
        // .then((response) => {
        //     this.setState({
        //         authors: response.data.result.rows
        //     });
        // });
    }

    onCreateImage() {
        // axios.post('/api/createauthor', {
        //     socialsecuritynumber,
        //     firstname,
        //     surname,
        //     comment
        // })
        // .then((response) => {
        //     this.getAuthors();
        // })
        // .catch((error) => {
        //     console.log('Something went wrong ', error);
        // });
    }

    onDeleteImage() {
        alert("Ta bort");
        // axios.post('/api/deleteauthor', {
        //     socialsecuritynumber
        // })
        // .then((response) => {
        //     this.getAuthors();
        // })
        // .catch((error) => {
        //     console.log('Something went wrong ', error);
        // });
    }

    render() {
        return (
            <div>
                <h2 className="center">Administrera Bilder</h2>
                <div className="row">
                    <div className="col s12 m12 l4">
                        <h4 className="center">Lägg in ny Bild</h4>
                        <CreateImageForm onCreateImage={this.onCreateAuthor}/>
                    </div>
                    <div className="col s12 m12 l8">
                        <h4 className="center">Bilder i Databasen</h4>
                        <ImagesList images={this.state.images} onDeleteImage={this.onDeleteAuthor}/>
                    </div>
                </div>  
            </div>
        );
    }
}
