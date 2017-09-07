import React, { Component } from 'react';

class LatestBid extends Component{

	 // Here we render the function
    render() {
    	 console.log(this.props.latestBid, 'this.props');
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Your Latest Bid</h3>
                </div>
                <div className="panel-body text-center">
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

export default LatestBid;