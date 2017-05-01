import React from 'react';
import axios from 'axios';

import SubCategoriesList from './SubCateGoriesList';

export default class CategoriesList extends React.Component {
    constructor(props) {
        super(props)
        
    }
    
    componentDidMount() {
        $('.collapsible').collapsible();
    }

    render() {
        return (
            <div>
                <ul className="collapsible" data-collapsible="accordion">
                    {this.props.categories.map((category) => {
                        return (
                            
                            <li key={category.category_id}>
                                <div className="collapsible-header"><i className="material-icons">label_outline</i>{category.name}<a href="#!" onClick={(e) => this.props.onDeleteCategory(category.category_id)} className="secondary-content">
                                        <i className="material-icons delete">delete</i>
                                    </a>
                                </div>
                                <div className="collapsible-body">
                                    <SubCategoriesList parentcategory={category.category_id} subcategories={this.props.subcategories} onDeleteSubCategory={this.props.onDeleteSubCategory}/>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
