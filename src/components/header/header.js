import React, {Component} from 'react';
import './header.css';
import developer from './assets/developer.svg';
import designer from './assets/designer.svg';
import creator from './assets/creator.svg';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    /** @function render
      * description: returns what the component renders to the webpage
      */
    render() {
        switch(this.props.page){
            case 'home':
                return (
                    <div className="header-container-home" id="header">
                        <div className="header-words-container">
                            <img src={creator} className="header-word-creator" alt="creator" />
                            <img src={designer} className="header-word-designer" alt="designer" />
                            <img src={developer} className="header-word-developer" alt="developer" />
                        </div>
                        <div className="header-name-wrap">
                            <Link to='/' onClick={() => window.scrollTo(0, 0)}>
                                <h1 className="header-name grey"><span className="yellow">Cody</span> Wilhelm</h1>
                            </Link>
                        </div>
                        <div className="header-info">
                            <h1><span className="yellow">"Hello, World!"</span></h1>
                            <h2>Strive for growth in creativity and technology. I'm a Software Engineer and Graphic Designer who's passionate about making the world a better and more functional place.</h2>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="header-container" id="header">
                        <div className="header-name-wrap">
                            <Link to='/' onClick={() => window.scrollTo(0, 0)}>
                                <h1 className="header-name"><span className="yellow">Cody</span> Wilhelm</h1>
                            </Link>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                );
        }
    }
}
