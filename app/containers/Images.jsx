import React from 'react';
import axios from 'axios';

import ImagesList from '../components/ImagesList';
import CreateImageForm from '../components/CreateImageForm';

export default class Images extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [],
            subCategories: []
        }
        this.getSubCategories = this.getSubCategories.bind(this);
        this.getImages = this.getImages.bind(this);
        this.onCreateImage = this.onCreateImage.bind(this);
        this.onDeleteImage = this.onDeleteImage.bind(this);
    }

    componentDidMount() {
        this.getSubCategories();
    }
    getSubCategories() {
        axios.get('/api/getsubcategories')
        .then((response) => {
            this.setState({
                subCategories: response.data.result.rows
            });
        });
    }
    getImages() {
        axios.get('/api/getimages')
        .then((response) => {
            this.setState({
                images: response.data.result.rows
            });
        });
    }

    onCreateImage() {
        axios.post('/api/createimage', {
            alt_text: altText, 
            image_ref: bildUrl, 
            subcategory: subCategoryID
        })
        .then((response) => {
            this.getImages();
        })
        .catch((error) => {
            console.log('Something went wrong ', error);
        });
    }

    onDeleteImage() {
        alert("Ta bort");
        axios.post('/api/deleteimage', {
            socialsecuritynumber
        })
        .then((response) => {
            this.getImages();
        })
        .catch((error) => {
            console.log('Something went wrong ', error);
        });
    }

    render() {
        return (
            <div>
                <h2 className="center">Administrera Bilder</h2>
                <div className="row">
                    <div className="col s12 m12 l4">
                        <h4 className="center">Lägg in ny Bild</h4>
                        <CreateImageForm onCreateImage={this.onCreateImage} subCategories={this.state.subCategories}/>
                    </div>
                    <div className="col s12 m12 l8">
                        <h4 className="center">Bilder i Databasen</h4>
                        <ImagesList images={this.state.images} onDeleteImage={this.onDeleteImage}/>
                    </div>
                </div>  
            </div>
        );
    }
}
