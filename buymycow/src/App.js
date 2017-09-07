import React, { Component } from 'react';
import './App.css';
import BidForm from "./children/BidForm";
import PastBids from "./children/PastBids";
import HighestBid from "./children/HighestBid";
import LatestBid from "./children/LatestBid";
import CowsForAuction from "./children/CowsForAuction";

// Helper for making AJAX requests to our API
import helpers from "./config/helpers";

class App extends Component {
  

    constructor(props) {

        // This super(props) line lets us access our parents properties as props.
        super(props);

        this.state = {
            cows: [],
            currentCow: "No Cow Selected",
            bidder: "",
            bidAmount: "",
            bidHistory:[],
            highestBid: [],
            latestBid: []
        };
        this.setCow = this.setCow.bind(this);
        this.setBidder = this.setBidder.bind(this);
        this.setBidAmount = this.setBidAmount.bind(this);
       
    }

    // The moment the page renders get the bidHistory

    componentDidMount() {
        
        // Get the bid history
        

        helpers.getCows().then(function(response){

            console.log(response)

            if (response !== this.state.cows) {

                this.setState({cows: response.data});
            }

        }.bind(this));

    }

   // If the component changes (i.e. if a bid is made )...

    componentDidUpdate(prevProps, prevState) {
        // console.log(prevProps) 
        console.log(prevState)
        // Run the query for the Search
        if (prevState.bidAmount !== this.state.bidAmount && prevState.bidder !== this.state.bidder) {

            console.log("component this.state", this.state);

            // Clears the bidHistory array if there is a new bid
            this.setState({bidHistory: []});

            helpers.postBid(this.state.currentCow, this.state.bidder, this.state.bidAmount).then(function (data) {
                
                if (data) {
                     // !== this.state.bidHistory
                    console.log(data, "updated list of bids" )
                    console.log(this.state)
                    // this.setState({bidHistory: data.data});
                   helpers.getBids(this.state.currentCow).then(function (response) {

                    // console.log("response.data",response.data);

                        if (response !== this.state.bidHistory) {

                        this.setState({bidHistory: response.data});

                        }

                    }.bind(this));

                    helpers.getHighestBid(this.state.currentCow).then(function (response){

                        // console.log("response.data",response.data);

                        if (response !== this.state.highestBid) {

                            this.setState({highestBid: response.data});
                        }
                    }.bind(this));
                }
            }.bind(this));
        }  
        if(prevState.currentCow !== this.state.currentCow){
        
            console.log("changed cow")

             helpers.getBids(this.state.currentCow).then(function (response) {

            // console.log("response.data",response.data);

                if (response !== this.state.bidHistory) {

                    this.setState({bidHistory: response.data});

                }

            }.bind(this));

            helpers.getHighestBid(this.state.currentCow).then(function (response){

                // console.log("response.data",response.data);

                if (response !== this.state.highestBid) {

                    this.setState({highestBid: response.data});
                }
            }.bind(this));
        }  
        
        
    }

    // This function allows childrens to update the parent.
    setBidder(bidder) {
        this.setState({bidder: bidder});
    }

    setCow(currentCow) {
        this.setState({currentCow: currentCow});       
    }

    setBidAmount(bidAmount) {
        this.setState({bidAmount: bidAmount});
    }


  render() {
    return (
        <div className="App">

            <div className="App-header">

                <h2>Welcome to Buy My Cow</h2>
                <h3>A live livestock auction</h3>

            </div>


            <div className="row">
                
                <CowsForAuction cows={this.state.cows} setCow={this.setCow} currentCow={this.state.currentCow}/>
            
            </div>


            <div className="row">

                <BidForm setBidder={this.setBidder} setBidAmount={this.setBidAmount} currentCow={this.state.currentCow}/>

            </div>


            <div className="row">

                <div className="col-sm-6">

                    <LatestBid latestBid={this.state.highestBid} currentCow={this.state.currentCow}/>

                </div>

                <div className="col-sm-6">

                    <HighestBid highestBid={this.state.highestBid} currentCow={this.state.currentCow}/>

                </div>

                <div className="col-sm-6">

                    <PastBids bidHistory={this.state.bidHistory} currentCow={this.state.currentCow}/>

                </div>

                      
            </div>        
        </div>
    );
  }
}

export default App;
