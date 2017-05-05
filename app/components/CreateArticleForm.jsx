import React from 'react';

export default class CreateAuthorForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            authors: [],
            categories: [],
            subCategories: [],
            mainCategoryId: "",
            images: [],
            imageCount: ""
        }
    }
    componentDidUpdate() {
        $('select').material_select('destroy');
        $('select').material_select();

    }
    componentDidMount() {
        $('select').material_select();

        const that = this;
        $("#abcde").on('change', function () {
            that.setState({
                mainCategoryId: parseInt($(this)[0].value)
            });
            $('select').material_select('destroy');
            $('select').material_select();
        });

        $("#images").on('change', function () {
            that.setState({
                imageCount: parseInt($("#images").val())
            });
            $('select').material_select('destroy');
            $('select').material_select();
        });
    }
    componentWillReceiveProps(props) {
        this.setState({
            authors: props.authors,
            categories: props.categories,
            subCategories: props.subCategories,
            images: props.images
        });
    }
    onsubmit(e) {
        const that = this;
        e.preventDefault();
        const articleTitle = this.refs.titel.value.trim();
        const articleContent = this.refs.content.value.trim();
        const subCategoryID = this.menuThree.value;
        const authors = $("#authors").val();
        const image_ids = $("#images").val();
        const imageTexts = [];
        image_ids.map( function (id, index) {
            const testID = `${id}-test`
            return(
                imageTexts.push(that.refs[testID].value.trim())
            );
        });

        if (articleTitle.length < 1) {
            alert("Lite längre titel på artikeln tack!");
        } else if (articleContent.length < 1) {
            alert("Skriv en längre artikel tack!");
        } else if (subCategoryID.length < 1) {
            alert("Välj en Underkategori tack!");
        } else {
            this.props.onCreateArticle(articleTitle, articleContent, subCategoryID, authors, image_ids, imageTexts);
            this.refs.titel.value = "";
            this.refs.content.value = "";
        }
    }
    render() {
        return (
            <div className="card">
                <form onSubmit={this.onsubmit.bind(this)}>
                    <div className="row">
                        <div className="input-field col s12">
                            <select multiple ref={(input) => this.menu = input} id="authors">
                                <option disabled >Välj Författare till Artikeln</option>
                                {this.state.authors.map((author, index) => {
                                    return (
                                        <option key={index} value={author.socialsecuritynumber} >{author.firstname} {author.surname}</option>
                                    )
                                })}
                            </select>
                            <label>Författare</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input ref="titel" id="titel" type="text" className="validate" />
                            <label htmlFor="titel">Titel</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea ref="content" id="content" className="materialize-textarea" />
                            <label htmlFor="content">Text</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <select ref={(input) => this.menuTwo = input} id="abcde">
                                <option disabled selected>Välj Huvudkategori till Artikeln</option>
                                {this.state.categories.map((category, index) => {
                                    return (
                                        <option key={index} value={category.category_id} >{category.name}</option>
                                    )
                                })}
                            </select>
                            <label>Huvudkategori</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <select ref={(input) => this.menuThree = input}>
                                <option disabled selected>Välj Underkategori till Huvudkategorin</option>
                                {this.state.subCategories.map((subCategory, index) => {
                                    if (this.state.mainCategoryId === subCategory.parent_category) {
                                        return (
                                            <option key={index} value={subCategory.subcategory_id} >{subCategory.name}</option>
                                        )
                                    }
                                })}
                            </select>
                            <label>Underkategori</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <select multiple ref={(input) => this.menuFour = input} id="images">
                                <option disabled>Välj Bilder till Artikeln</option>
                                {this.state.images.map((image, index) => {
                                    return (
                                        <option key={index} value={image.image_id} data-icon={image.image_ref} >#{index +1} {image.alt_text}</option>
                                    )
                                })}
                            </select>
                            <label>Bild</label>
                        </div>
                    </div>
                    {this.state.imageCount > 0 ? 
                        $("#images").val().map((image, index) => {
                            return (
                                <div key={index} className="row">
                                    <div className="input-field col s12">
                                        <input ref={`${image}-test`} id="bildtext" type="text" className="validate" />
                                        <label htmlFor="bildtext">Bildtext #{index + 1}</label>
                                    </div>
                                </div>
                            );
                        })
                    : null}

                    <button className="waves-effect waves-light btn create-btn" type="submit">Spara</button>
                </form>
            </div>
        );
    }
}
