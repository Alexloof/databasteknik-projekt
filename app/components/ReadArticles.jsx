import React from 'react';

export default class ReadArticle extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            article: null,
            comments: null
        };

        this.onSubmitComment = this.onSubmitComment.bind(this);
    }

    componentWillMount(){
        this.setState({
            article: this.props.article,
            comments: this.props.comments
        });
    }

    componentWillReceiveProps(props) {
        this.setState({
            article: props.article,
            comments: props.comments
        });
    }

    onSubmitComment(e) {
        e.preventDefault();
        const commenter = this.refs.commenter.value.trim();
        const comment = this.refs.comment.value.trim();
        this.props.onSubmitComment(commenter, comment);
        this.refs.commenter.value = "";
        this.refs.comment.value = "";
    }

    render(){
        return (
            <div className="col s12 m12 l10 offset-l1">
                <h1 style={{ textAlign: 'center'}}>{this.state.article.title}</h1>
                <div className="row">
                    <div className="col s12 m6 l6">
                        {this.state.article.images ? this.state.article.images.map((image, index) => {
                            return (
                                <div key={index}>
                                    <img style={{ width: '100%'}} src={image.image_ref} alt={image.alt_text}/>
                                    <p>{image.text}</p>
                                </div>
                            )
                            
                        }): <h2>Det ska va bilder här för fan</h2>}
                    </div>
                    <div className="col s12 m6 l6">
                        <p>{this.state.article.authors ? this.state.article.authors.map((author) => {
                            return (`| ${author.firstname} ${author.surname} |`)
                        }): null}
                        <br/>{this.state.article.created_at}<br/>
                        </p>
                        <p>{this.state.article.content}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m12 l12">
                        <ul className="collection with-header">
                            <li className="collection-header"><h4>Kommentarer</h4></li>
                            {this.state.comments ? this.state.comments.map((comment, index) => {
                                return (
                                    <li key={index} style={{ minHeight: '0px'}} className="collection-item avatar">
                                        <i style={{ fontSize: '32px'}} className="large material-icons circle pink">child_care</i>
                                        <span className="title">{comment.commenter}</span>
                                        <p>{comment.comment}</p>
                                        <p className="secondary-content">{comment.created_at}</p>
                                    </li>
                                )
                            }): null}
                        </ul>
                        <form onSubmit={(e) => this.onSubmitComment(e)}>
                            <input ref="commenter" type="text" id="namn" placeholder="Namn" required/>
                            <input ref="comment" type="text" id="meddelande" placeholder="Kommentar" required/>
                            <button className="btn" type="submit">SKICKA</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}