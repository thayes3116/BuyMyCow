//Import React and Compnent
import React, { Component } from 'react';

//import css file
import './App.css';

//import all of the children components
import BidForm from "./children/BidForm";
import PastBids from "./children/PastBids";
import HighestBid from "./children/HighestBid";
import LatestBid from "./children/LatestBid";
import CowsForAuction from "./children/CowsForAuction";
import CowsForm from "./children/CowsForm";

// Helper for making AJAX requests to our API
import helpers from "./config/helpers";

//Create new class
class App extends Component {
  
    constructor(props) {

        //lets us access our parents properties as props.
        super(props);

        //setting the initial state
        this.state = {
            cows: [],
            currentCow: "No Cow Selected",
            bidder: "",
            bidAmount: "",
            bidHistory:[],
            highestBid: [],
            latestBid: []
        };

        //binding the methods to this
        this.setCow = this.setCow.bind(this);
        this.setBidder = this.setBidder.bind(this);
        this.setBidAmount = this.setBidAmount.bind(this);
    }

    // The moment the page renders get the bidHistory
    componentDidMount() {
        
        // Get the cows for sale
        helpers.getCows().then(function(response){
            
            //don't change unless their is an update
            if (response !== this.state.cows) {

                this.setState({cows: response.data});
            }

        }.bind(this));

    }

    // If a bid is submitted
    componentDidUpdate(prevProps, prevState) {
        
        // Run the query for posting a new bid
        if (prevState.bidAmount !== this.state.bidAmount && prevState.bidder !== this.state.bidder) {

            console.log("component this.state", this.state);

            // Clears the bidHistory array if there is a new bid
            this.setState({bidHistory: []});

            helpers.postBid(this.state.currentCow, this.state.bidder, this.state.bidAmount).then(function (data) {
                
                //if the post is successful
                if (data) {                   
                    
                    //update the latestbid
                    this.setState({latestBid:[{bidder: this.state.bidder, bidAmount: this.state.bidAmount}]});
                    
                    //get new list of all bids which will include the latest one
                    helpers.getBids(this.state.currentCow).then(function (response) {

                        //update bidHistory only if it is changed
                        if (response.data !== this.state.bidHistory) {

                        this.setState({bidHistory: response.data});

                        }

                    }.bind(this));

                    //get new highest bid which may include the new one
                    helpers.getHighestBid(this.state.currentCow).then(function (response){

                        //update only if the last bid was the highest bid
                        if (response.data !== this.state.highestBid) {

                            this.setState({highestBid: response.data});
                        }
                    }.bind(this));
                }
            }.bind(this));
        }  

        //update selected cow if currentCow is changed
        if(prevState.currentCow !== this.state.currentCow){

            //get bids for new currentCow
            helpers.getBids(this.state.currentCow).then(function (response) {

                if (response.data !== this.state.bidHistory) {

                    this.setState({bidHistory: response.data});

                }

            }.bind(this));

            //get highest bid for new currentCow
            helpers.getHighestBid(this.state.currentCow).then(function (response){

                if (response.data !== this.state.highestBid) {

                    this.setState({highestBid: response.data});
                }
            }.bind(this));
        }         
    }

    // This function allows childrens to update the bidder.
    setBidder(bidder) {
        this.setState({bidder: bidder});            
    }

    // This function allows childrens to update the currentCow.
    setCow(currentCow) {
        this.setState({currentCow: currentCow});       
    }

    // This function allows childrens to update the bidAmount.
    setBidAmount(bidAmount) {
        this.setState({bidAmount: bidAmount});
    }

    // This is the component's render method
    render() {

        return (
            
            <div className="App container-fluid">

                <div className="App-header text-center">

                    <h2>Welcome to Buy My Cow</h2>
                    <br />
                    <br />
                    <h3>A live livestock auction</h3>

                </div>


                <div className="row text-center">

                    <div className="col-sm-12">
                
                        <CowsForAuction cows={this.state.cows} />
                    
                    </div>

                </div>

                <div className="row text-center">

                    <div className="col-sm-12">

                        <CowsForm setCow={this.setCow} currentCow={this.state.currentCow}/>

                   </div>

                </div>

                <div className="row">

                    <BidForm setBidder={this.setBidder} setBidAmount={this.setBidAmount} currentCow={this.state.currentCow}/>

                </div>


                <div className="row">

                        <LatestBid latestBid={this.state.latestBid} currentCow={this.state.currentCow}/>

                </div>


                <div className="row">

                
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

//export component for use in index.js
export default App;
