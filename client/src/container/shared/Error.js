import React, { Component } from 'react';

class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
                <h1>No Path for this route</h1>
            </div>
         );
    }
}
 
export default Error;