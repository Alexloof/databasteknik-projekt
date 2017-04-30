import React from 'react';

export default class CreateSubCategoryForm extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <form action="">
                    <div className="row">
                        <h5>Skapa Ny Subkategori</h5>
                        <div className="input-field col s12">
                            <input id="name" type="text" className="validate"/>
                            <label htmlFor="name">Ny Subkategori</label>
                        </div>
                    </div>
                    <a className="waves-effect waves-light btn">Spara</a>
                </form>
            </div>
        );
    }
}
