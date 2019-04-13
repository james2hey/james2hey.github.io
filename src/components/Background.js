import React, {Component} from "react";


export default class Background extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return this.props.reversed
            ? (
                <div className='Project-item'>
                    <div className='Project-body'>
                        <h4>{this.props.header}</h4>
                        <p>{this.props.body}</p>
                    </div>
                    <div className='Project-image-container'>
                        <img src={this.props.image} alt={'project image'} className="Project-image"/>
                    </div>
                </div>
            )
            : (
            <div className='Project-item'>
                <div className='Project-image-container'>
                    <img src={this.props.image} alt={'project image'} className="Project-image"/>
                </div>
                    <div className='Project-body'>
                        <h4>{this.props.header}</h4>
                        <p>{this.props.body}</p>
                    </div>
            </div>
        )
    }
}