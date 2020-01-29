import React, {Component} from 'react';
import './external-page.css';

export default class ExternalPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            url: ''
        }
    }

    /** @function componentDidMount
      * description: executes when the component loaded (mounted). Watches for a window resize
      */
    componentDidMount(){
        this.setState({
            url: 'http://external.cjoewd.com/public/' + this.props.pageID,
        });
    }

    /** @function render
      * description: returns what the component renders to the webpage
      */
    render() {
        return (
            <object data={this.state.url} />

        );
    }
}
