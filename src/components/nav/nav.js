import React, {Component} from 'react';
import './nav.css';
import logo from './assets/cjoewd-logo.svg';
import mini from './assets/cjoewd-mini-logo.svg';
import home from './assets/home.svg';
import programming from './assets/programming.svg';
import design from './assets/design.svg';
import about from './assets/about.svg';
import menu from './assets/menu.svg';
import {Link} from 'react-router-dom';

export default class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {

        }

        this.navPopup = this.navPopup.bind(this);
        this.sizeWindow = this.sizeWindow.bind(this);
    }

    navPopup(force){
        var div = document.getElementById('nav-popup');
        if(div.style.display == "block" || force == "close"){
            div.style.display = "none";
            document.body.style.overflow = "auto";
            document.getElementById('nav-shadow').style.zIndex = "-1001";
        }
        else {
            div.style.display = "block";
            document.body.style.overflow = "hidden";
            document.getElementById('nav-shadow').style.zIndex = "999";
        }
        if(force == "new"){
            window.scrollTo(0, 0);
        }
    }

    sizeWindow(){
        this.navPopup("close");
    }

    /** @function componentDidMount
      * description: executes when the component loaded (mounted). Watches for a window resize
      */
    componentDidMount(){
        window.addEventListener('resize', this.sizeWindow, false);
    }

    /** @function componentWillUnmount
      * description: executes when the component is no longer needed. No longer watches for a window resize.
      */
    componentWillUnmount() {
        window.removeEventListener('resize', this.sizeWindow, false);
    }

    /** @function render
      * description: returns what the component renders to the webpage
      */
    render() {
        return (
            <div>
                <div id="nav-popup">
                    <Link to='/' onClick={() => this.navPopup("new")}>
                        <div className="nav-popup-link-wrap">
                            <div className="nav-popup-link-cell">
                                <img src={home} className="nav-popup-link-icon" alt="home" />
                                <h3>Home</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to='/program' onClick={() => this.navPopup("new")}>
                        <div className="nav-popup-link-wrap">
                            <div className="nav-popup-link-cell">
                                <img src={programming} className="nav-popup-link-icon" alt="programs" />
                                <h3>Program</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to='/design' onClick={() => this.navPopup("new")}>
                        <div className="nav-popup-link-wrap">
                            <div className="nav-popup-link-cell">
                                <img src={design} className="nav-popup-link-icon" alt="designs" />
                                <h3>Design</h3>
                            </div>
                        </div>
                    </Link>
                    <Link to='/about' onClick={() => this.navPopup("new")}>
                        <div className="nav-popup-link-wrap">
                            <div className="nav-popup-link-cell">
                                <img src={about} className="nav-popup-link-icon" alt="about" />
                                <h3>About</h3>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="nav-bar">
                    <Link to='/' onClick={() => window.scrollTo(0, 0)}>
                        <img src={logo} className="nav-logo" alt="logo" />
                        <img src={mini} className="nav-logo-mini" alt="logo" />
                    </Link>
                    <div className="nav-main-link-container">
                        <Link to='/' onClick={() => window.scrollTo(0, 0)}>
                            <div className="nav-main-link-wrap">
                                <img src={home} className="nav-main-link-icon" alt="home" />
                                <h3>Home</h3>
                            </div>
                        </Link>
                        <Link to='/program' onClick={() => window.scrollTo(0, 0)}>
                            <div to='/' className="nav-main-link-wrap">
                                <img src={programming} className="nav-main-link-icon" alt="programs" />
                                <h3>Program</h3>
                            </div>
                        </Link>
                        <Link to='/design' onClick={() => window.scrollTo(0, 0)}>
                            <div className="nav-main-link-wrap">
                                <img src={design} className="nav-main-link-icon" alt="designs" />
                                <h3>Design</h3>
                            </div>
                        </Link>
                        <Link to='/about' onClick={() => window.scrollTo(0, 0)}>
                            <div className="nav-main-link-wrap">
                                <img src={about} className="nav-main-link-icon" alt="about" />
                                <h3>About</h3>
                            </div>
                        </Link>
                    </div>
                </div>
                <img src={menu} className="nav-main-menu" alt="logo"  onClick={() => this.navPopup()}/>
                <div id="nav-shadow"></div>
            </div>
        );
    }
}
