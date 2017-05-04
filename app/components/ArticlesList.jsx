import React from 'react';

export default class ImagesList extends React.Component {
    constructor(props) {
        super(props)
        
    }
    
    componentDidMount() {
        $('.collapsible').collapsible();
    }
    render() {
        return (
            <div>
                <ul className="collapsible" data-collapsible="accordion">
                    {this.props.articles.map((article) => {
                        return (
                            
                            <li key={article.article_id}>
                                <div className="collapsible-header"><i className="material-icons">label_outline</i>{article.title}<a href="#!" onClick={(e) => this.props.onDeleteArticle(article.article_id)} className="secondary-content">
                                        <i className="material-icons delete">delete</i>
                                    </a>
                                </div>
                                <div className="collapsible-body">
                                    {article.content}
                                    <br/>
                                    Underkategori-ID: {article.subcategory}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
