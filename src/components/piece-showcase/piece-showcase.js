import React, {Component} from 'react';
import './piece-showcase.css';
import back from './assets/back.svg';
import left from './assets/left.svg';
import right from './assets/right.svg';
import {Link} from 'react-router-dom';
import Nav from '../nav/nav';

export default class PieceShowcase extends Component {
    constructor(props){
        super(props);
        this.state = {
            imageNumber: 1,
            designColor: '',
            codingColor: '',
            designDisplay: '',
            codingDisplay: '',
            designTab: '',
            codingTab: '',
            data: require('./../../projects/' + this.props.projectID + '/data.js')
        }
        this.changeState = this.changeState.bind(this);
        this.cycleImage = this.cycleImage.bind(this);
        this.setupState = this.setupState.bind(this);
        this.sizeWindow = this.sizeWindow.bind(this);
    }

    /** @function changeState
      * description: changes state to the tab that was selected
      * @param String newState - the state we are changing to 'design' or 'program'
      */
    changeState(newState){
        if(newState==="design"){
            this.setState({
                codingColor: "#EEEEEE",
                codingDisplay: "none",
                designColor: "#FFFFFF",
                designDisplay: "initial"
            });
        }
        else{
            this.setState({
                codingColor: "#FFFFFF",
                codingDisplay: "initial",
                designColor: "#EEEEEE",
                designDisplay: "none",
            });
        }
    }

    /** @function cycleImage
      * description: changes the image number to the next or previous image
      * @param direction - the direction the image is being rotated, left is previous image, right is next image
      */
    cycleImage(direction){
        var temp;
        switch(direction){
            case "left":
                if(this.state.imageNumber > 1){
                    temp = this.state.imageNumber;
                    this.setState({imageNumber: temp -= 1});
                }
                else{
                    this.setState({imageNumber: this.state.data.imageCount});
                }
                break;
            case "right":
                if(this.state.imageNumber === this.state.data.imageCount){
                    this.setState({imageNumber: 1});
                }
                else{
                    temp = this.state.imageNumber;
                    this.setState({imageNumber: temp += 1});
                }
                break;
            default:
        }
    }

    /** @function setupState
      * description: sets up the state variables depending on primary aspect the project selected (design or program)
      */
    setupState(){
        if(this.state.data.primary === "design"){
            this.setState({
                codingColor: "#EEEEEE",
                codingDisplay: "none",
                designColor: "#FFFFFF",
                designDisplay: "initial",
                designTab: "initial"
            });
            if(!this.state.data.secondary){
                this.setState({codingTab: "none"});
            }
        }
        else{
            this.setState({
                codingColor: "#FFFFFF",
                codingDisplay: "initial",
                designColor: "#EEEEEE",
                designDisplay: "none",
                codingTab: "initial",
            });
            if(!this.state.data.secondary){
                this.setState({designTab: "none"});
            }
        }
    }

    sizeWindow(){
        document.body.style.overflow = 'hidden';
    }

    /** @function componentDidMount
      * description: executes when the component loaded (mounted).
      */
    componentDidMount(){
        this.setupState();
        document.body.style.overflow = 'hidden';
        window.addEventListener('resize', this.sizeWindow, false);
    }

    /** @function componentWillUnmount
      * description: executes when the component is no longer needed.
      */
    componentWillUnmount() {
        document.body.style.overflowY = 'scroll';
        window.removeEventListener('resize', this.sizeWindow, false);
    }

    /** @function render
      * description: returns what the component renders to the webpage
      */
    render() {
        var bg = require('./../../projects/'+this.props.projectID+'/images/'+this.state.imageNumber+'.jpg');
        return (
            <div className="piece-showcase-container">
                <div className="content-wrap">
                    <div className="scroll-box">
                    <Nav></Nav>
                        <div className="image-wrap">
                            <Link to={this.props.direct}>
                                <img src={back} className="back-button" alt="logo" />
                            </Link>
                            <p className="showcase-header-two">{this.state.data.name}</p>
                            <div className="image" style={{backgroundImage: 'url("'+bg+'")'}}></div>
                            <img src={left} className="arrow-left" alt="logo" onClick={() => this.cycleImage("left")}/>
                            <div className="image-number">{this.state.imageNumber} of {this.state.data.imageCount}</div>
                            <img src={right} className="arrow-right" alt="logo" onClick={() => this.cycleImage("right")}/>
                        </div>
                        <div className="info-wrap">
                            <p className="showcase-header">{this.state.data.name}</p>
                            <div className="tabs-wrap">
                                <div className="tab" style={{backgroundColor: this.state.designColor, display: this.state.designTab}} onClick={() => this.changeState("design")}>
                                    <p>Design</p>
                                </div>
                                <div className="tab"  style={{backgroundColor: this.state.codingColor, display: this.state.codingTab}} onClick={() => this.changeState("program")}>
                                    <p>Coding</p>
                                </div>
                            </div>
                            <div className="content-design" style={{display: this.state.designDisplay}}>
                                <p dangerouslySetInnerHTML={{__html: this.state.data.designText}}/>
                            </div>
                            <div className="content-coding" style={{display: this.state.codingDisplay}}>
                                <p dangerouslySetInnerHTML={{__html: this.state.data.codingText}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
