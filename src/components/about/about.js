import React, {Component} from 'react';
import './about.css';
import me from './assets/me.svg';

export default class About extends Component {
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
            <div className="about-container">
                <div className="about-info-right">
                    <div className="about-left-left">
                        <img src={me} className="about-image" />
                    </div>
                    <div className="about-left-right">
                        <h1 className="about-connect">Connect</h1>
                        <a href='https://www.facebook.com/CjoewD' target='_blank'><div id='play-button'> Facebook </div></a>
                        <a href='https://www.instagram.com/CjoewD' target='_blank'><div id='play-button'> Instagram </div></a>
                        <a href='https://www.linkedin.com/in/CjoewD' target='_blank'><div id='play-button'> LinkedIN </div></a>
                    </div>
                </div>
                <div className="about-info-left">
                    <p><h1 className="intro-header">Hello there!</h1> <div className="intro-header-fix"></div>I'm a software engineer and graphic designer. I love solving problems and creating, does not matter the medium in which it is in: programming/logical or designing/creative. Doing the same old thing can get boring, challenges let you learn and grow.</p>
                    <br/>
                    <h1>Some fun facts about me:</h1>
                    <ul>
                        <li>An INTP (Introvert-Intuition-Thinking-Perceiving).</li>
                        <li>Yellow is my favorite color.</li>
                        <li>An identical twin.</li>
                        <li>Founding Father and Alpha Class Member of Sigma Tau Gamma, Zeta Kappa Chapter.</li>
                        <li>Through college I worked as a Resident Assistant, CIS Lab Assistant, Media Design Consultant, and Gas Station Attendant.</li>
                        <li>Graduated Cum Laude and triple major (Software Engineering, Graphic Design, and Digital Arts) from K-State.</li>
                        <li>Huge Pokémon fan, and still play Pokémon Go.</li>
                    </ul>
                </div>
                <div className="clearfix"></div>
                <div className="about-trans"></div>
            </div>
        );
    }
}
