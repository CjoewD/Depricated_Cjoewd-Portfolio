import React, {Component} from 'react';
import './piece-spotlight.css';
import Piece from './../piece/piece';
import {Link} from 'react-router-dom';

export default class PieceSpotlight extends Component {
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
                    <h1>Spotlights( )</h1>
                </div>
                    <Link to={this.props.direct + require('./../../projects/music_poster_set/data.js').id}>
                        <Piece state={'program'} project={'music_poster_set'}></Piece>
                    </Link>
                    <Piece state={'null'}></Piece>
                    <Link to={this.props.direct + require('./../../projects/scrolling_shooter_game/data.js').id}>
                        <Piece state={'program'} project={'scrolling_shooter_game'}></Piece>
                    </Link>
                    <Link to={this.props.direct + require('./../../projects/pet_experiment/data.js').id}>
                        <Piece state={'design'} project={'pet_experiment'}></Piece>
                    </Link>
                    <span className="show-three"><Piece state={'null'}></Piece></span>
                    <Link to={this.props.direct + require('./../../projects/tied_&_true/data.js').id}>
                        <Piece state={'design'} project={'tied_&_true'}></Piece>
                    </Link>
                    <Link to={this.props.direct + require('./../../projects/frogger_game/data.js').id}>
                        <Piece state={'program'} project={'frogger_game'}></Piece>
                    </Link>
                    <Link to={this.props.direct + require('./../../projects/personal_logo_website/data.js').id}>
                        <Piece state={'design'} project={'personal_logo_website'}></Piece>
                    </Link>
                    <Piece state={'null'}></Piece>
                <div className="clearfix">&nbsp;</div>
            </div>
        );
    }
}
