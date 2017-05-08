import React from 'react';
import axios from 'axios';

import ReadArticles from '../components/ReadArticles';

export default class Read extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            article: "",
            comments: ""
        }

        this.onSubmitComment = this.onSubmitComment.bind(this);
        this.getArticleComments = this.getArticleComments.bind(this);
    }

    componentDidMount() {
        axios.get(`/api/getOneFullArticle/?id=${this.props.params.id}`)
        .then((response) => {
            this.setState({
                article: response.data[0]
            });
        });
        this.getArticleComments();

    }

    getArticleComments() {
        axios.get(`/api/getArticleComments/?id=${this.props.params.id}`)
        .then((response) => {
            this.setState({
                comments: response.data.result.rows
            })
        })
    }

    onSubmitComment(commenter, comment){
        axios.post('/api/createarticlecomment', {
            article_id: this.props.params.id,
            commenter,
            comment
        })
        .then((response) => {
            this.getArticleComments();
        })
        .catch((error) => {
            console.log('Something went wrong ', error);
        });
    }
 
    render() {
        return (
            <div className="row">
                <ReadArticles article={this.state.article} comments={this.state.comments} onSubmitComment={this.onSubmitComment}/>
            </div>
        );
    }
    
}
