import React from 'react';

export default class CreateCategoryForm extends React.Component {
    constructor(props) {
        super(props)

    }

    onsubmit(e) {
        e.preventDefault();
        const category_name = this.refs.category_name.value.trim();
        if (category_name.length < 1) {
            alert("Lite mer text tack");
        } else {
            this.props.onCreateCategory(category_name);
            this.refs.category_name.value = "";
        }   
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onsubmit.bind(this)}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input ref="category_name" id="name" type="text" className="validate"/>
                            <label htmlFor="name">Ny Kategori</label>
                        </div>
                    </div>
                    <button className="waves-effect waves-light btn" type="submit">Spara</button>
                </form>
            </div>
        );
    }
}
