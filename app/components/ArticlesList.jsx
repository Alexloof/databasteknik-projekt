import React from 'react';
import axios from 'axios';

export default class ImagesList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: null,
            clickedArticleId: ""
        }
    }
    componentDidMount() {
        $('.collapsible').collapsible();
    }
    getArticleComments(id) {
        this.setState({
            comments: null
        });
        axios.get(`/api/getArticleComments/?id=${id}`)
        .then((response) => {
            this.setState({
                comments: response.data.result.rows,
                clickedArticleId: id
            })
        })
    }
    deleteComment(comment_id) {
        axios.post('/api/deletecomment', {
            comment_id
        })
        .then((response) => {
            this.getArticleComments(this.state.clickedArticleId);
        })
        .catch((error) => {
            console.log('Something went wrong ', error);
        });
    }
    render() {
        return (
            <div>
                <ul className="collapsible" data-collapsible="accordion">
                    {this.props.articles.map((article) => {
                        return (

                            <li key={article.article_id}>
                                <div onClick={() => this.getArticleComments(article.article_id)} className="collapsible-header"><i className="material-icons">label_outline</i>{article.title}<a href="#" onClick={(e) => this.props.onDeleteArticle(article.article_id)} className="secondary-content">
                                    <i className="material-icons delete">delete</i>
                                </a>
                                </div>
                                <div className="collapsible-body">
                                    {article.content}
                                </div>
                                <div className="collapsible-body">                      
                                    <ul className="collection with-header">
                                        <li className="collection-header"><span className="title">Kommentarer</span></li>
                                        {this.state.comments ? this.state.comments.map((comment, index) => {
                                            return (
                                                <li key={index} className="collection-item">
                                                    <span className="title">{comment.commenter}</span>
                                                    <br/>
                                                    {comment.comment}
                                                    <a style={{cursor: "pointer"}} onClick={(e) => this.deleteComment(comment.article_comment_id)} className="secondary-content"><i className="material-icons">delete</i></a>
                                                </li>
                                            )
                                        }): null}
                                        
                                    </ul>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

