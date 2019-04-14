import React, {Component} from "react";

export default class TechItem extends Component {
    render() {
        return (
            <div className="Tech-item-container">
                <img src={this.props.image} alt={'tech image'} className="Tech-image"/>
                <p>{this.props.name}</p>
            </div>
        )
    }
}



