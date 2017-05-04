import React from 'react';

export default class CreateImageForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            subCategories: []
        }
    }
    componentDidUpdate() {
        $('select').material_select('destroy');
        $('select').material_select();
    }
    componentWillReceiveProps(props) {
        this.setState({
            subCategories: props.subCategories
        });
    }
    componentDidMount() {
        $('select').material_select();
    }
    onsubmit(e) {
        e.preventDefault();
        const altText = this.refs.altText.value.trim();
        const bildUrl = this.refs.bildUrl.value.trim();
        const subCategoryID = this.menu.value;
        if (altText.length < 1) {
            alert("Lite längre alt-text tack");
        } else if (subCategoryID === "Välj tillhörande Kategori") {
            alert("Du måste välja en Kategori");
        } else {
            this.props.onCreateImage(altText, bildUrl, subCategoryID);
            this.refs.altText.value = "";
            this.refs.bildUrl.value = "";
        }  
    }

    render() {
        return (
            <div className="card">
                <form onSubmit={this.onsubmit.bind(this)}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input ref="altText" id="altText" type="text" className="validate" />
                            <label htmlFor="altText">Alt-text</label>
                        </div>
                        <div className="input-field col s12">
                            <input ref="bildUrl" id="bildUrl" type="text" className="validate" />
                            <label htmlFor="bildUrl">Bild-URL</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <select ref={(input) => this.menu = input}>
                                <option disabled selected>Välj tillhörande Kategori</option>
                                {this.state.subCategories.map((subCategory, index) => {
                                    return (
                                        <option key={subCategory.subcategory_id} value={subCategory.subcategory_id} >{subCategory.name}</option>
                                    )
                                })}
                            </select>
                            <label>Kategori</label>
                        </div>
                    </div>
                    <button className="waves-effect waves-light btn create-btn" type="submit">Spara</button>
                </form>
            </div>
        );
    }
}
