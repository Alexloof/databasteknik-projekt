import React from 'react';
import axios from 'axios';

import CreateArticleForm from '../components/CreateArticleForm';
import ArticlesList from '../components/ArticlesList';

export default class Articles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            subCategories: [],
            articles: [],
            authors: [],
            images: []
        };
        this.getImages = this.getImages.bind(this);
        this.getArticles = this.getArticles.bind(this);
        this.getAuthors = this.getAuthors.bind(this);
        this.getSubCategories = this.getSubCategories.bind(this);
        this.getCategories = this.getCategories.bind(this);
        this.onCreateArticle = this.onCreateArticle.bind(this);
        this.onDeleteArticle = this.onDeleteArticle.bind(this);
    }
    componentDidMount() {
        this.getImages();
        this.getArticles();
        this.getSubCategories();
        this.getAuthors();
        this.getCategories();
    }
    getAuthors() {
        axios.get('/api/getauthors')
        .then((response) => {
            this.setState({
                authors: response.data.result.rows
            });
        });
    }
    getArticles() {
        axios.get('/api/getarticles')
        .then((response) => {
            this.setState({
                articles: response.data.result.rows
            });
        });
    }

    onCreateArticle(articleTitle, articleContent, subCategoryID, authors, image_ids, imageTexts) {
        axios.post('/api/createarticle', {
            title: articleTitle,
            content: articleContent,
            subcategory: subCategoryID
        })
        .then((response) => {
            const article_id = response.data.result.rows[0].article_id
            authors.map((author, index) => {
                axios.post('/api/createarticleauthor', {
                    article_id: article_id,
                    socialsecuritynumber: author,
                })
                .catch((error) => {
                    console.log('Something went wrong ', error);
                });
            });
            image_ids.map((image, index) => {
                axios.post('/api/createarticleimage', {
                    article_id: article_id,
                    image_id: image,
                    text: imageTexts[index]
                })
                .then((response) => {
                    this.getArticles();
                })
                .catch((error) => {
                    console.log('Something went wrong ', error);
                });
            });
            
            
        })
        .catch((error) => {
            console.log('Something went wrong ', error);
        });

    
        
    }

    onDeleteArticle(article_id) {
        axios.post('/api/deletearticle', {
            article_id
        })
        .then((response) => {
            this.getArticles();
        })
        .catch((error) => {
            console.log('Something went wrong ', error);
        });
    }
    getSubCategories() {
        axios.get('/api/getsubcategories')
        .then((response) => {
            this.setState({
                subCategories: response.data.result.rows
            });
        });
    }
    getCategories() {
        axios.get('/api/getcategories')
        .then((response) => {
            this.setState({
                categories: response.data.result.rows
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
    render() {
        return (
            <div>
                <h2 className="center">Administrera Artiklar</h2>
                <div className="row">
                    <div className="col s12 m12 l6">
                        <h4 className="center">Skapa nya Artiklar</h4>
                        <CreateArticleForm onCreateArticle={this.onCreateArticle} authors={this.state.authors} categories={this.state.categories} 
                        subCategories={this.state.subCategories} images={this.state.images}/>
                    </div>
                    <div className="col s12 m12 l6">
                        <h4 className="center">Artiklar i Databasen</h4>
                        <ArticlesList articles={this.state.articles} onDeleteArticle={this.onDeleteArticle} subCategories={this.state.subCategories}/>
                    </div>
                </div> 
            </div>
        );
    }
    
}
