import React from 'react';

import CategoriesList from '../components/CategoriesList';

export default class Categories extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2>Administrera Kategorier</h2>
                <div className="row">
                    <CategoriesList/>
                </div>  
            </div>
        );
    }
}
