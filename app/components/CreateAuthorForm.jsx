import React from 'react';

export default class CreateAuthorForm extends React.Component {
    constructor(props) {
        super(props)

    }

    onsubmit(e) {
        e.preventDefault();
        const socialsecuritynumber = this.refs.socialsecuritynumber.value.trim();
        const firstname = this.refs.firstname.value.trim();
        const surname = this.refs.surname.value.trim();
        const comment = this.refs.comment.value.trim();

        if (socialsecuritynumber.length !== 12) {
            alert("Personnumret ska vara 12 siffror utan extra tecken");
        } else if (firstname.length < 1) {
            alert("Ange ett förnamn");
        } else if (surname.length < 1) {
            alert("Ange ett efternamn");
        } else {
            this.props.onCreateAuthor(socialsecuritynumber, firstname, surname, comment);
            this.refs.socialsecuritynumber.value = "";
            this.refs.firstname.value = "";
            this.refs.surname.value = "";
            this.refs.comment = "";
        }   
    }

    render() {
        return (
            <div className="card">
                <form onSubmit={this.onsubmit.bind(this)}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input ref="socialsecuritynumber" id="socialsecuritynumber" type="number" className="validate"/>
                            <label htmlFor="socialsecuritynumber">Personnummer (endast siffror)</label>
                        </div>
                        <div className="input-field col s12">
                            <input ref="firstname" id="firstname" type="text" className="validate"/>
                            <label htmlFor="firstname">Förnamn</label>
                        </div>
                        <div className="input-field col s12">
                            <input ref="surname" id="surname" type="text" className="validate"/>
                            <label htmlFor="surname">Efternamn</label>
                        </div>
                        <div className="input-field col s12">
                            <input ref="comment" id="comment" type="text" className="validate"/>
                            <label htmlFor="comment">Kommentar</label>
                        </div>
                    </div>
                    <button className="waves-effect waves-light btn create-btn" type="submit">Spara</button>
                </form>
            </div>
        );
    }
}
