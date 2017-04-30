import React from 'react';

export default class CreateSubCategoryForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            selectvalue: "Välj tillhörande kategori"
        }

    }
    componentDidMount() {
        $('select').material_select();
    }
    componentDidUpdate() {
        $('select').material_select('destroy');
        $('select').material_select();
    }

    componentWillReceiveProps(props) {
        console.log(props);
        this.setState({
            categories: props.categories
        });
    }

    onsubmit(e) {
        e.preventDefault();
        const subcategory_name = this.refs.subcategory_name.value.trim();
        const parent_category_id = null // BLA BLA HÄR VAR JAG!!!! MÅste få in parentcat id på nått sätt
        if (subcategory_name.length < 1) {
            alert("Lite mer text tack");
        } else {
            this.props.onCreateSubCategory(subcategory_name, parent_category_id);
            this.refs.subcategory_name.value = "";
        }   
    }

    handleChange(e) {
        this.setState({selectvalue: e.target.value});
        console.log(this.state.selectvalue);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onsubmit.bind(this)}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="name" ref="subcategory_name" type="text" className="validate"/>
                            <label htmlFor="name">Ny Subkategori</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <select value={this.state.selectvalue} onChange={this.handleChange.bind(this)}>
                                <option disabled>Välj tillhörande Kategori</option>
                                {this.state.categories.map((category, index) => {
                                    return (
                                        <option key={category.category_id} value={category.category_id} >{category.name}</option>
                                    )
                                })}
                            </select>
                            <label>Kategori</label>
                        </div>
                    </div>
                    <button className="waves-effect waves-light btn">Spara</button>
                </form>
            </div>
        );
    }
}
