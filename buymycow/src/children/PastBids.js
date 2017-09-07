import React, { Component } from 'react';

class PastBids extends Component
{
	render() {
        console.log(this.props, 'this.props');
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Past Bids on Cow with ID: {this.props.currentCow}</h3>
                </div>
                <div className="panel-body text-center">

                    {/* Here we use a map function to loop through an array in JSX */}
                    {this.props.bidHistory.map((bids, i) => {
                        return (
                            <div key={i}>
                                
                                <p>Username of Bidder: {bids.bidder}</p>
                                
                                <p>Amount Bid: {bids.bidamount}</p>

                                <hr />

                           
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default PastBids;