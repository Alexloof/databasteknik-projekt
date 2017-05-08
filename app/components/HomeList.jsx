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
                                <div className="card horizontal">
                                    <div className="card-image">
                                        <img src={article.images[0].image_ref}></img>
                                    </div>
                                    <div className="card-stacked">
                                        <div className="card-content">
                                            <h4>{article.title}</h4>
                                            <br/>
                                            <p style={{ height: '30%', overflow: 'hidden' }}>{article.content}</p>
                                            <br/>
                                            <p>
                                                {article.authors.map((author, index) => <span key={index}> | {author.firstname} {author.surname} | </span>)}
                                            </p>
                                        </div>
                                        <div className="card-action">
                                            <a style={{cursor: "pointer", float: "left" }} onClick={() => this.props.openArticle(article.article_id)}>Read</a>
                                            <p style={{margin: "0", float: "right"}}>{article.created_at}</p>
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
