import React, {Component} from 'react';
import './piece.css';

export default class Piece extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    /** @function render
      * description: returns what the component renders to the webpage
      */
    render() {
        if(this.props.state === 'null'){
            return (
                    <div className="content-box-null">

                    </div>
            );
        }
        else{
            var bg = require('./../../projects/'+this.props.project+'/images/piece.jpg');
            switch(this.props.state){
                case 'program':
                    return (
                        <div className="content-box" style={{backgroundImage: 'url("'+bg+'")'}}>

                        </div>
                    );
                case 'design':
                    return (
                        <div className="content-box" style={{backgroundImage: 'url("'+bg+'")'}}>

                        </div>
                    );
                case 'large':
                    bg = require('../../projects/'+this.props.project+'/images/piece-large.jpg');
                    return (
                        <div className="content-box-large" style={{backgroundImage: 'url("'+bg+'")'}}>

                        </div>
                    );
                case 'wide':
                    bg = require('../../projects/'+this.props.project+'/images/piece-wide.jpg');
                    return (
                        <div className="content-box-wide" style={{backgroundImage: 'url("'+bg+'")'}}>

                        </div>
                    );
                default:
                    return (
                        <div className="content-box-null">

                        </div>
                    );
            }
        }
    }
}
