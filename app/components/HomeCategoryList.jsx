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
                    {this.props.categories.map((category) => {
                        return (
                            <li key={category.category_id}>
                                <div className="collapsible-header"><i className="material-icons">label_outline</i>{category.name} - artiklar #{category.count}
                                </div>
                                <div className="collapsible-body">
                                    <HomeSubCategoryList parentcategory={category.category_id} subcategories={this.props.subcategories}/>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
