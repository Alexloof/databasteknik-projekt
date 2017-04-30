import React from 'react';
import axios from 'axios';

export default class CategoriesList extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        return (
            <div>
                <ul className="collection with-header">
                    <li className="collection-header">
                        <h4>Kategorier</h4>
                    </li>
                    {this.props.categories.map((category) => {
                        return (
                            <li className="collection-item" key={category.category_id}>
                                <div>{category.name}<a href="#!" onClick={(e) => this.props.onDeleteCategory(category.category_id)} className="secondary-content">
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
