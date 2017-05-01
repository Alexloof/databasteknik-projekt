import React from 'react';

export default class AuthorsList extends React.Component {
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
                    {this.props.authors.map((author) => {
                        return (
                            
                            <li key={author.socialsecuritynumber}>
                                <div className="collapsible-header"><i className="material-icons">account_circle</i>{author.firstname} {author.surname}<a href="#!" onClick={(e) => this.props.onDeleteAuthor(author.socialsecuritynumber)} className="secondary-content">
                                        <i className="material-icons delete">delete</i>
                                    </a>
                                </div>
                                <div className="collapsible-body">
                                    <ul>
                                        <li><span>Personnummer: {author.socialsecuritynumber}</span></li>
                                        <li><p>Kommentar: {author.comment}</p></li>
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
