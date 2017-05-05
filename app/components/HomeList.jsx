import React from 'react';
import axios from 'axios';

export default class ImagesList extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <div className="row">
                    {this.props.articles.map((article, index) => {
                        return (
                            <div key={index} className="col s12 m12">

                                <div style={{height: "300px"}} className="card horizontal">
                                    <div style={{width: "100%"}} className="card-image">
                                        <img src={article.images[0].image_ref}></img>
                                    </div>
                                    <div className="card-stacked">
                                        <div className="card-content">
                                            <p>
                                                {article.authors.map((author, index) => <span key={index}> | {author.firstname} {author.surname} | </span>)}
                                            </p>
                                            <br/>
                                            <p>{article.content}</p>
                                        </div>
                                        <div className="card-action">
                                            <a style={{cursor: "pointer" }} onClick={() => this.props.openArticle(article.article_id)}>Read</a>
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
