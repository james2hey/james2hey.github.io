import React, {Component} from "react";


export default class Project extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='Project-item'>
                <div className='Project-image-container'>
                    <img src={this.props.image} alt={'project image'} className="Project-image"/>
                </div>
                <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                    <div className='Project-body'>
                        <h5>{this.props.header}</h5>
                        <p>{this.props.body}</p>
                    </div>
                </a>
            </div>
        )
    }
}