import React from 'react';

export default class CreateImageForm extends React.Component {
    constructor(props) {
        super(props)

    }

    onsubmit(e) {
        e.preventDefault();
        
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
