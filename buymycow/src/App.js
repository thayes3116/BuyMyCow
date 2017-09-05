import React, { Component } from 'react';
import './App.css';
import BidForm from "./children/BidForm";
import PastBids from "./children/PastBids";
import HighestBid from "./children/HighestBid"
// Helper for making AJAX requests to our API
import helpers from "./config/helpers";


class App extends Component {
  

    constructor(props) {

        // This super(props) line lets us access our parents properties as props.
        super(props);

        this.state = {
            bidder: "",
            bidAmount: "",
            bidHistory:[],
            highestBidder: "",
            highestBid: ""
        };

        this.setBidder = this.setBidder.bind(this);
        this.setBidAmount = this.setBidAmount.bind(this);
        this.getClick = this.getClick.bind(this);
    }
    // The moment the page renders get the bidHistory

    componentDidMount() {
        // Get the bid history
        // helpers.getBids().then(function (response) {
        //     // console.log("response.data",response.data);
        //     if (response !== this.state.bidHistory) {
        //         this.setState({bidHistory: response.data});
        //     }
        // }.bind(this));
    }

    // If the component changes (i.e. if a bid is made )...
    componentDidUpdate(prevProps, prevState) {

        // Run the query for the Search
        if (prevState.searchTerm !== this.state.searchTerm) {

            console.log("component this.state", this.state);

            //Clears the bidHistory array if there is a new bid
            this.setState({bidHistory: []});

            helpers.runQuery(this.state.searchTerm, this.state.startYear, this.state.endYear).then(function (data) {
                
                if (data !== this.state.results) {
                   
                }
            }.bind(this));
        }
    }

    // This function allows childrens to update the parent.
    setBidder(bidder) {
        this.setState({bidder: bidder});
    }

    setBidAmount(bidAmount) {
        this.setState({bidAmount: bidAmount});
    }

    getClick(bid) {
        
        helpers.postBid(bid.bidder, bid.bidAmount).then(function () {
           
            // After we've done the post... then get the updated bidHistory
            helpers.getgetBids().then(function (response) {
                this.setState({bidHistory: response.data});
                
            }.bind(this));
        }.bind(this));
    }

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <h2>Welcome to Buy My Cow</h2>
          <h3>A live livestock auction</h3>
        </div>

        <div className="row">

          <BidForm setBidder={this.setBidder} setBidAmount={this.setBidAmount}/>

        </div>

        <div className="row">

            <div className="col-sm-6">

                <PastBids bidHistory={this.state.bidHistory} getClicked={this.getClick}/>

            </div>

            <div className="col-sm-6">

                <HighestBid highestBidder={this.state.highestBidder} highestBid={this.state.highestBid}/>

            </div>
               
        </div>        
      </div>
    );
  }
}

export default App;
