//Import React and Compnent
import React, { Component } from 'react';

//Create new class
class PastBids extends Component

{
    // This is the component's render method
	render() {
        
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Past Bids on Cow with ID: {this.props.currentCow}</h3>
                </div>
                <div className="panel-body text-center">

                    {/*Here we display all of the past bids for the currently selected cow*/}
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

//export conponenet for use by App.js
export default PastBids;