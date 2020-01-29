import React, {Component} from 'react';
import './piece-designs.css';
import Piece from '../piece/piece';
import {Link} from 'react-router-dom';

export default class PieceDesigns extends Component {
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
                    <h1>Designs( )</h1>
                </div>
                    <Link to={this.props.direct + '/' + require('./../../projects/tied_&_true/data.js').id}>
                        <Piece state={'large'}  project={'tied_&_true'}></Piece>
                    </Link>
                    <Link to={this.props.direct + '/' + require('./../../projects/hand_lettering/data.js').id}>
                        <Piece state={'design'}  project={'hand_lettering'}></Piece>
                    </Link>
                    <span className="show-two"><Piece state={'null'}></Piece></span>
                    <Link to={this.props.direct + '/' + require('./../../projects/music_poster_set/data.js').id}>
                        <Piece state={'design'}  project={'music_poster_set'}></Piece>
                    </Link>
                    <div className="clearfix show-three">&nbsp;</div>
                    <span className="show-three"><Piece state={'null'}></Piece></span>
                    <Link to={this.props.direct + '/' + require('./../../projects/maverick_magazine/data.js').id}>
                        <Piece state={'design'}  project={'maverick_magazine'}></Piece>
                    </Link>
                    <Piece state={'null'}></Piece>
                    <Link to={this.props.direct + '/' + require('./../../projects/pet_experiment/data.js').id}>
                        <Piece state={'wide'}  project={'pet_experiment'}></Piece>
                    </Link>
                <div className="clearfix">&nbsp;</div>
            </div>
        );
    }
}
