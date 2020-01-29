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
                    <p><h1 className="intro-header">Hello there!</h1> <div className="intro-header-fix"></div>I am currently a Resident Assistant and student pursuing my double degree of Software Engineering and Graphic Design at Kansas State University. I love Solving problems and creating, does not matter the medium in which it is in: programing/logical or designing/creative. Doing the same old thing can get boring, challenges let you learn and grow. My dream job would be dynamic and combine both of my interests of designing and programming.</p>
                    <br/>
                    <h1>Some fun facts about me:</h1>
                    <ul>
                        <li>I’m an INTP (Introvert-Intuition-Thinking-Perceiving).</li>
                        <li>Yellow is my favorite color, hence the color used throughout my website.</li>
                        <li>Founding Father and Alpha Class Member of Sigma Tau Gama, Zeta Kappa Chapter.</li>
                        <li>I’m an identical twin, for some reason people get offended when they don’t know this about me.</li>
                        <li>I know how to cut down trees, and work scrap metal.</li>
                        <li>Through college I worked as a Resident Assistant, CIS Lab Assistant, Media Design Consultant, and Gas Station Attendant.</li>
                    </ul>
                </div>
                <div className="clearfix"></div>
                <div className="about-trans"></div>
            </div>
        );
    }
}
