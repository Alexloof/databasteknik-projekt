import React from 'react';
import axios from 'axios';

export default class SubCategoriesList extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        return (
            <div>
                <ul className="collection">
                    {this.props.subcategories.map((subcategory) => {
                        return (
                            <li className="collection-item" key={subcategory.subcategory_id}>
                                <div><i className="tiny material-icons">label</i>{subcategory.name}<a href="#!" onClick={(e) => this.props.onDeleteSubCategory(subcategory.subcategory_id)} className="secondary-content">
                                        <i className="material-icons">delete</i>
                                    </a>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
