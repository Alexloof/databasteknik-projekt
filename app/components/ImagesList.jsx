import React from 'react';

export default class ImagesList extends React.Component {
    constructor(props) {
        super(props)
        
    }
    
    componentDidMount() {
        //$('.collapsible').collapsible();
    }

    render() {
        return (
            <div>
                <ul className="collapsible" data-collapsible="accordion">
                    {this.props.images.map((author, index) => {
                        return (
                            
                            <li key={index}>
                                <div className="collapsible-header"><i className="material-icons">account_circle</i>HEJ HEJ<a href="#!" onClick={(e) => this.props.onDeleteImage()} className="secondary-content">
                                        <i className="material-icons delete">delete</i>
                                    </a>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
