import React, { Component } from 'react';

class PastBids extends Component
{
	render() {
        // console.log(this.props, 'this.props');
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Past Bids</h3>
                </div>
                <div className="panel-body text-center">

                    {/* Here we use a map function to loop through an array in JSX */}
                    {this.props.bidHistory.map((search, i) => {
                        return (
                            <div key={i}>
                                
                                // <p>{search.bidder}</p>
                                
                                // <p>{search.amount}</p>

                           
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default PastBids;