//Import React and Compnent
import React, { Component } from 'react';

//Create new class
class LatestBid extends Component{

	// This is the component's render method
    render() {
    	
        return (
            <div className="panel panel-default text-center">
                <div className="panel-heading text-center">
                    <h3 className="panel-title text-center">Your Latest Bid</h3>
                </div>
                <div className="panel-body text-center">

                    {/*The latest bid information*/}
                    {this.props.latestBid.map((bid, i) => {
                        return (
                            <div key={i}>
                                <p>Username: {bid.bidder}</p>
                                
                                <p>Latest Bid Amount: {bid.bidAmount}</p>
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
export default LatestBid;