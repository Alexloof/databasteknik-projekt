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
    }

    componentDidMount() {
        axios.get(`/api/getOneFullArticle/?id=${this.props.params.id}`)
        .then((response) => {
            this.setState({
                article: response.data[0]
            });
        });
    }

    getArticleComments() {
        axios.get(`/api/getArticleComments/?id=${this.props.params.id}`)
        .then((response) => {
            this.setState({
                comments: response.result.rows
            })
            console.log(this.state.comments)
        })
    }


    onSubmitComment(commenter, comment){
        axios.post('/api/createarticlecomment', {
            article_id: this.props.params.id,
            commenter,
            comment
        })
        .then((response) => {
            //this.getArticles();
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
