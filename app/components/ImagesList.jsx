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
                    {this.props.images.map((image) => {
                        return (
                            
                            <li key={image.image_id}>
                                <div className="collapsible-header"><i className="material-icons">label_outline</i>{image.name}<a href="#!" onClick={(e) => this.props.onDeleteImage(image.image_id)} className="secondary-content">
                                        <i className="material-icons delete">delete</i>
                                    </a>
                                </div>
                                <div className="collapsible-body">
                                    hej
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
