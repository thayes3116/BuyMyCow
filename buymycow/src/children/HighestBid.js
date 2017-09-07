import React, { Component } from 'react';

class HighestBid extends Component{

	 // Here we render the function
    render() {
    	 // console.log(this.props.highestBid, 'this.props');
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Current Highest Bid on Cow with ID: {this.props.currentCow}</h3>
                </div>
                <div className="panel-body text-center">
                    {this.props.highestBid.map((bid, i) => {
                        return (
                            <div key={i}>
                                <p>{bid.bidder}</p>
                                
                                <p>{bid.bidamount}</p>
                                <br />
                            </div>
                            )
                    })}
                </div>    
            </div>
        );
    }


}

export default HighestBid;