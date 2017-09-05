import React, { Component } from 'react';

class HighestBid extends Component{

	 // Here we render the function
    render() {
    	// console.log(this.props, 'this.props');
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Current Highest Bid</h3>
                </div>
                <div className="panel-body text-center">
                    <p>{this.props.highestBidder}</p>
                    <br />
                    <p>{this.props.highestBid}</p>
                </div>    
            </div>
        );
    }


}

export default HighestBid;