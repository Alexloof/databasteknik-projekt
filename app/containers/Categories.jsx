import React from 'react';
import axios from 'axios';

import CreateCategoryForm from '../components/CreateCategoryForm';
import CreateSubCategoryForm from '../components/CreateSubCategoryForm';
import CategoriesList from '../components/CategoriesList';
import SubCategoriesList from '../components/SubCategoriesList';

export default class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            subcategories: []
        };

        this.getCategories = this.getCategories.bind(this);
        this.getSubCategories = this.getSubCategories.bind(this);
        this.onCreateCategory = this.onCreateCategory.bind(this);
        this.onCreateSubCategory = this.onCreateSubCategory.bind(this);
        this.onDeleteCategory = this.onDeleteCategory.bind(this);
        this.onDeleteSubCategory = this.onDeleteSubCategory.bind(this);
    }

    componentDidMount() {
        this.refreshCategories();
    }

    refreshCategories() {
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

    onCreateCategory(category_name) {
        axios.post('/api/createcategory', {
            category: category_name
        })
        .then((response) => {
            this.getCategories();
        })
        .catch((error) => {
            console.log('Something went wrong ', error);
        });
    }
    onCreateSubCategory(subcategory_name, parent_category_id) {
        axios.post('/api/createsubcategory', {
            subcategory: subcategory_name,
	        parent_category: parent_category_id
        })
        .then((response) => {
            this.getSubCategories();
        })
        .catch((error) => {
            console.log('Something went wrong ', error);
        });
    }

    onDeleteCategory(category_id) {
        axios.post('/api/deletecategory', {
            category_id
        })
        .then((response) => {
            this.refreshCategories();
        })
        .catch((error) => {
            console.log('Something went wrong ', error);
        });
    }
    onDeleteSubCategory(subcategory_id) {
        alert(subcategory_id + " - Koppla till Axios delete för subkategorier");
    }

    render() {
        return (
            <div>
                <h2 className="center">Administrera Kategorier</h2>
                <div className="row">
                    <div className="col s12 m12 l6">
                        <h4 className="center">Skapa nya Kategorier</h4>
                        <CreateCategoryForm onCreateCategory={this.onCreateCategory}/>
                        <CreateSubCategoryForm categories={this.state.categories} onCreateSubCategory={this.onCreateSubCategory}/>
                    </div>
                    <div className="col s12 m12 l6">
                        <h4 className="center">Kategorier i Databasen</h4>
                        <CategoriesList categories={this.state.categories} onDeleteCategory={this.onDeleteCategory}/>
                        <SubCategoriesList subcategories={this.state.subcategories} onDeleteSubCategory={this.onDeleteSubCategory}/>
                    </div>
                </div>  
            </div>
        );
    }
}
