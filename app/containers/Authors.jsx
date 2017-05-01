import React from 'react';
import axios from 'axios';

import AuthorsList from '../components/AuthorsList';
import CreateAuthorForm from '../components/CreateAuthorForm';

export default class Authors extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            authors: []
        }

        this.getAuthors = this.getAuthors.bind(this);
        this.onCreateAuthor = this.onCreateAuthor.bind(this);
        this.onDeleteAuthor = this.onDeleteAuthor.bind(this);
    }

    componentDidMount() {
        this.getAuthors();
    }

    getAuthors() {
        axios.get('/api/getauthors')
        .then((response) => {
            this.setState({
                authors: response.data.result.rows
            });
        });
    }

    onCreateAuthor(socialsecuritynumber, firstname, surname, comment) {
        axios.post('/api/createauthor', {
            socialsecuritynumber,
            firstname,
            surname,
            comment
        })
        .then((response) => {
            this.getAuthors();
        })
        .catch((error) => {
            console.log('Something went wrong ', error);
        });
    }

    onDeleteAuthor(socialsecuritynumber) {
        axios.post('/api/deleteauthor', {
            socialsecuritynumber
        })
        .then((response) => {
            this.getAuthors();
        })
        .catch((error) => {
            console.log('Something went wrong ', error);
        });
    }

    render() {
        return (
            <div>
                <h2 className="center">Administrera Författare</h2>
                <div className="row">
                    <div className="col s12 m12 l6">
                        <h4 className="center">Lägg in ny Författare</h4>
                        <CreateAuthorForm onCreateAuthor={this.onCreateAuthor}/>
                    </div>
                    <div className="col s12 m12 l6">
                        <h4 className="center">Författare i Databasen</h4>
                        <AuthorsList authors={this.state.authors} onDeleteAuthor={this.onDeleteAuthor}/>
                    </div>
                </div>  
            </div>
        );
    }
}
