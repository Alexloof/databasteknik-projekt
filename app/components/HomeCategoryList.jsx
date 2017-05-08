import React from 'react';

import HomeSubCategoryList from './HomeSubCateGoryList';

export default class HomeCategoryList extends React.Component {
    constructor(props) {
        super(props)
        
    }
    
    componentDidMount() {
        $('.collapsible').collapsible();
    }

    render() {
        return (
            <div>
                <ul style={{textAlign: "start"}} className="collapsible" data-collapsible="accordion">
                    <div onClick={this.props.showAllArticles} className="collapsible-header">Visa alla</div>
                    {this.props.categories.map((category) => {
                        return (
                            <li key={category.category_id}>
                                <div onClick={() => this.props.renderNewArticles(category.category_id, null)} className="collapsible-header"><i className="material-icons">label_outline</i>{category.name} <div style={{float:"right", marginTop: "6px"}} className="chip">{category.count}</div>
                                </div>
                                <div className="collapsible-body">
                                    <HomeSubCategoryList parentcategory={category.category_id} subcategories={this.props.subcategories} renderNewArticles={this.props.renderNewArticles}/>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
