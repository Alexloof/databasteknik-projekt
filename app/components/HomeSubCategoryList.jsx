import React from 'react';

export default class HomeSubCategoryList extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        return (
            <div>
                <ul className="collection">
                    {this.props.subcategories.map((subcategory) => {
                        if(this.props.parentcategory === subcategory.parent_category) {
                            return (
                            <li onClick={() => console.log("click sub")} style={{cursor: "pointer"}} className="collection-item" key={subcategory.subcategory_id}>
                                <div><i className="tiny material-icons" style={{marginRight: "5px"}}>label</i>{subcategory.name} - artiklar #{subcategory.count}
                                </div>
                            </li>
                        );
                        }
                        
                    })}
                </ul>
            </div>
        );
    }
}
