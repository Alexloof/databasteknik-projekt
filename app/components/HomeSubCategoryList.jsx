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
                            <li onClick={() => this.props.renderNewArticles(null, subcategory.subcategory_id)} style={{cursor: "pointer"}} style={{padding: "20px"}} className="collection-item" key={subcategory.subcategory_id}>
                                <div><i className="tiny material-icons" style={{marginRight: "5px"}}>label</i>{subcategory.name} <div style={{position: "absolute", right: "50px", height: "20px", lineHeight: "1.5" }} className="chip">{subcategory.count}</div>
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
