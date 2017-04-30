import React from 'react';

import CreateCategoryForm from '../components/CreateCategoryForm';
import CreateSubCategoryForm from '../components/CreateSubCategoryForm';
import CategoriesList from '../components/CategoriesList';
import SubCategoriesList from '../components/SubCategoriesList';

export default class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    _id: 1,
                    title: 'En Test Kategori',
                },
                {
                    _id: 2,
                    title: 'Ännu en Test Kategori',
                },
                {
                    _id: 3,
                    title: 'En tredje Test Kategori',
                }
            ],
            subcategories: [
                {
                    _id: 7,
                    title: 'En Test SUB Kategori',
                },
                {
                    _id: 8,
                    title: 'Ännu en Test SUB Kategori',
                },
                {
                    _id: 9,
                    title: 'En tredje Test SUB Kategori',
                }
            ]
        };

        this.onDeleteCategory = this.onDeleteCategory.bind(this);
    }

    componentDidMount() { // Skapa en route för GET som returnerar alla kategorier
        // axios.get('URLFÖRROUTEN').then((res) => {
        //     trolla in resultatet i state eller nått
        //     console.log(res);
        //     this.setState({
        //         categories: 'test'
        //     });
        // });
    }

    onDeleteCategory(category_id) {
        alert(category_id + " - Koppla till Axios delete för kategorier");
    }
    onDeleteSubCategory(subcategory_id) {
        alert(subcategory_id + " - Koppla till Axios delete för subkategorier");
    }

    render() {
        return (
            <div>
                <h2>Administrera Kategorier</h2>
                <div className="row">
                    <div className="col s12 m12 l6">
                        <CreateCategoryForm/>
                        <CreateSubCategoryForm/>
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
