import React, {Component} from 'react';
import './piece-organizer.css';
import PieceSpotlight from './../piece-spotlight/piece-spotlight';
import PiecePrograms from './../piece-programs/piece-programs';
import PieceDesigns from './../piece-designs/piece-designs';
import PieceShowcase from './../piece-showcase/piece-showcase';

export default class PieceOrganizer extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    /** @function render
      * description: returns what the component renders to the webpage
      */
    render() {
        switch(this.props.state){
            case 'spotlight':
                if(this.props.projectID == null || this.props.projectID === "undefined"){
                    return (
                        <PieceSpotlight direct={this.props.direct}></PieceSpotlight>
                    );
                }
                else{
                    return (
                        <div>
                            <PieceSpotlight direct={this.props.direct}></PieceSpotlight>
                            <PieceShowcase projectID={this.props.projectID}  direct={this.props.direct}></PieceShowcase>
                        </div>
                    );
                }
            case 'programs':
                if(this.props.projectID == null || this.props.projectID === "undefined"){
                    return (
                        <PiecePrograms direct={this.props.direct}></PiecePrograms>
                    );
                }
                else{
                    return (
                        <div>
                            <PiecePrograms direct={this.props.direct}></PiecePrograms>
                            <PieceShowcase projectID={this.props.projectID}  direct={this.props.direct}></PieceShowcase>
                        </div>
                    );
                }
            case 'designs':
                if(this.props.projectID == null || this.props.projectID === "undefined"){
                    return (
                        <PieceDesigns direct={this.props.direct}></PieceDesigns>
                    );
                }
                else{
                    return (
                        <div>
                            <PieceDesigns direct={this.props.direct}></PieceDesigns>
                            <PieceShowcase projectID={this.props.projectID} direct={this.props.direct}></PieceShowcase>
                        </div>
                    );
                }
            default:
                return(
                    <span></span>
                );
        }
    }
}
