import React, { Component } from 'react';
import './App.css';
import './fonts/league-gothic/stylesheet.css';
import './fonts/enigmatic/stylesheet.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Circuit from './components/circuit/circuit';
import Nav from './components/nav/nav';
import Header from './components/header/header';
import PieceOrganizer from './components/piece-organizer/piece-organizer';
import About from './components/about/about';
import ExternalPage from './components/external-page/external-page';

class App extends Component {
  render() {
    return (
        <Router>
            <div id="app">
                <Nav></Nav>
                <Switch>
                    <Route exact path="/program" render={()=>(
                        <div>
                            <div className="content-container" id="content">
                                <Header></Header>
                                <PieceOrganizer state={'programs'}  direct={'/program'}></PieceOrganizer>
                                <div className="footer-spacer" id="footer"></div>
                            </div>
                            <div id="circuit-container">
                                <Circuit page={'program'}></Circuit>
                            </div>
                        </div>
                    )}/>
                    <Route exact path="/program/:projectID" render={({match})=>(
                        <div>
                            <div className="content-container" id="content">
                                <Header></Header>
                                <PieceOrganizer state={'programs'} projectID={match.params.projectID}  direct={'/program'}></PieceOrganizer>
                                <div className="footer-spacer" id="footer"></div>
                            </div>
                            <div id="circuit-container">
                                <Circuit page={'program'}></Circuit>
                            </div>
                        </div>
                    )}/>
                    <Route exact path="/design" render={()=>(
                        <div>
                            <div className="content-container" id="content">
                                <Header></Header>
                                <PieceOrganizer state={'designs'}  direct={'/design'}></PieceOrganizer>
                                <div className="footer-spacer" id="footer"></div>
                            </div>
                            <div id="circuit-container">
                                <Circuit page={'design'}></Circuit>
                            </div>
                        </div>
                    )}/>
                    <Route exact path="/design/:projectID" render={({match})=>(
                        <div>
                            <div className="content-container" id="content">
                                <Header></Header>
                                <PieceOrganizer state={'designs'} projectID={match.params.projectID}  direct={'/design'}></PieceOrganizer>
                                <div className="footer-spacer" id="footer"></div>
                            </div>
                            <div id="circuit-container">
                                <Circuit page={'design'}></Circuit>
                            </div>
                        </div>
                    )}/>
                    <Route exact path="/about" render={()=>(
                        <div>
                            <div className="content-container" id="content">
                                <Header></Header>
                                <About></About>
                                <div className="footer-spacer" id="footer"></div>
                            </div>
                            <div id="circuit-container">
                                <Circuit page={'about'}></Circuit>
                            </div>
                        </div>
                    )}/>
                    <Route path="/external/:pageID" render={({match})=>(
                        <div className="content-container" id="content">
                          <ExternalPage pageID={match.params.pageID} direct={'/'}></ExternalPage>
                        </div>
                    )}/>
                    <Route path="/:projectID" render={({match})=>(
                        <div>
                            <div className="content-container" id="content">
                                <Header page={'home'}></Header>
                                <PieceOrganizer state={'spotlight'} projectID={match.params.projectID} direct={'/'}></PieceOrganizer>
                                <div className="footer-spacer" id="footer"></div>
                            </div>
                            <div id="circuit-container">
                                <Circuit page={'home'}></Circuit>
                            </div>
                        </div>
                    )}/>
                    <Route path="/" render={()=>(
                        <div>
                            <div className="content-container" id="content">
                                <Header page={'home'}></Header>
                                <PieceOrganizer state={'spotlight'}  direct={'/'}></PieceOrganizer>
                                <div className="footer-spacer" id="footer"></div>
                            </div>
                            <div id="circuit-container">
                                <Circuit page={'home'}></Circuit>
                            </div>
                        </div>
                    )}/>
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
