import React, {Component} from 'react';
import './piece-programs.css';
import Piece from './../piece/piece';
import {Link} from 'react-router-dom';

export default class PiecePrograms extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    /** @function render
      * description: returns what the component renders to the webpage
      */
    render() {
        return (
            <div className="spotlight-container">
                <div className="section-header-spacer">
                    <h1>&nbsp;</h1>
                </div>
                <div className="section-header">
                    <h1>Programs( )</h1>
                </div>
                    <Link to={this.props.direct + '/' + require('./../../projects/pipes_game/data.js').id}>
                        <Piece state={'program'} project={'pipes_game'}></Piece>
                    </Link>
                    <Piece state={'null'}></Piece>
                    <Link to={this.props.direct + '/' + require('./../../projects/scrolling_shooter_game/data.js').id}>
                        <Piece state={'program'} project={'scrolling_shooter_game'}></Piece>
                    </Link>
                    <Link to={this.props.direct + '/' + require('./../../projects/frogger_game/data.js').id}>
                        <Piece state={'program'} project={'frogger_game'}></Piece>
                    </Link>
                    <span className="show-three"><Piece state={'null'}></Piece></span>
                    <Link to={this.props.direct + '/' + require('./../../projects/snake_game/data.js').id}>
                        <Piece state={'program'} project={'snake_game'}></Piece>
                    </Link>
                    <Link to={this.props.direct + '/' + require('./../../projects/asteroid_game/data.js').id}>
                        <Piece state={'program'} project={'asteroid_game'}></Piece>
                    </Link>
                    <Piece state={'null'}></Piece>
                    <Link to={this.props.direct + '/' + require('./../../projects/personal_logo_website/data.js').id}>
                        <Piece state={'program'} project={'personal_logo_website'}></Piece>
                    </Link>
                <div className="clearfix">&nbsp;</div>
            </div>
        );
    }
}
