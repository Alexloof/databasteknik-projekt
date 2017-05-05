import React from 'react';
import axios from 'axios';

import HomeList from '../components/HomeList';
import HomeCategoryList from '../components/HomeCategoryList';


export default class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            subcategories: [],
            articles: [],
        };
        this.getCategories = this.getCategories.bind(this);
        this.getSubCategories = this.getSubCategories.bind(this);
        this.getFullArticles = this.getFullArticles.bind(this);
        this.openArticle = this.openArticle.bind(this);
    }

    componentDidMount() {
        this.getFullArticles();
        this.getCategories();
        this.getSubCategories();
    }
    getCategories() {
        axios.get('/api/getcategories')
        .then((response) => {
            this.setState({
                categories: response.data.result.rows
            });
        });
    }
    getSubCategories() {
        axios.get('/api/getsubcategories')
        .then((response) => {
            this.setState({
                subcategories: response.data.result.rows
            });
        });
    }
    getFullArticles() {
        axios.get('/api/getFullArticles')
            .then((response) => {
                this.setState({
                    articles: response.data
                });
            });
    }
    openArticle(article) {
        console.log(article);
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12 m12 l4">
                        <HomeCategoryList subcategories={this.state.subcategories} categories={this.state.categories}/>
                    </div>
                    <div className="col s12 m12 l8">
                        <HomeList articles={this.state.articles} openArticle={this.openArticle} />
                    </div>
                </div>
            </div>
        );
    }
}
