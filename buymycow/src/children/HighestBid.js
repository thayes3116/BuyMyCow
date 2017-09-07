//Import React and Compnent
import React, { Component } from 'react';

//Create new class
class HighestBid extends Component{

	// This is the component's render method
    render() {
    	 
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Current Highest Bid on Cow with ID: {this.props.currentCow}</h3>
                </div>
                <div className="panel-body text-center">
                    {/*Display the highest bidder and highest bid amount*/}
                    {this.props.highestBid.map((bid, i) => {
                        return (
                            <div key={i}>
                                <p>Username of Highest Bidder: {bid.bidder}</p>
                                
                                <p>Highest Amount Bid: {bid.bidamount}</p>
                                <br />
                            </div>
                        )
                    })}
                </div>    
            </div>
        );
    }
}

//export component for use by App.js
export default HighestBid;