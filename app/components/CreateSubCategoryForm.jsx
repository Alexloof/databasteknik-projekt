import React from 'react';

export default class CreateSubCategoryForm extends React.Component {
    constructor(props) {
        super(props)

    }
    componentDidMount() {
        $('select').material_select();
    }

    render() {
        return (
            <div>
                <form action="">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="name" type="text" className="validate"/>
                            <label htmlFor="name">Ny Subkategori</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <select>
                                <option value="" disabled selected>Välj tillhörande Kategori</option>
                                {this.props.categories.map((category, index) => {
                                    return (
                                        <option key={category._id} value={index}>{category.title}</option>
                                    )
                                })}
                            </select>
                            <label>Kategorier</label>
                        </div>
                    </div>
                    <a className="waves-effect waves-light btn">Spara</a>
                </form>
            </div>
        );
    }
}
