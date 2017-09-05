import React, { Component } from 'react';
import './App.css';
import Form from "./children/BidForm";
import Saved from "./children/PastBids";
// Helper for making AJAX requests to our API
import helpers from "./helpers";


class App extends Component {
  
    // This is the equivalent of our "getInitialState"
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
        this.setEndYear = this.setEndYear.bind(this);
        this.getClick = this.getClick.bind(this);
    }
    // The moment the page renders get the Saved
    componentDidMount() {
        // Get the bid history
        helpers.getBids().then(function (response) {
            // console.log("response.data",response.data);
            if (response !== this.state.bidHistory) {
                this.setState({bidHistory: response.data});
            }
        }.bind(this));
    }

    // If the component changes (i.e. if a search is entered)...
    componentDidUpdate(prevProps, prevState) {
        // Run the query for the Search
        if (prevState.searchTerm !== this.state.searchTerm) {
            //Clears the Results array if there is a new Search
            console.log("component this.state", this.state);
            this.setState({results: []});
            helpers.runQuery(this.state.searchTerm, this.state.startYear, this.state.endYear).then(function (data) {
                
                if (data !== this.state.results) {
                    // for (var i = 0; i < 8; i++) {
                        
                    //     var newResults = {head: data[i].headline.main, url:data[i].web_url, snippet:data[i].snippet};
                        
                    //     //Adds published date if one is available
                    //     if(data[i].pub_date){
                    //         console.log(data[i].pub_date.substr(0,10));
                    //         newResults.pub_date = data[i].pub_date.substr(0,10);
                    //     }else{

                    //         newResults.pub_date = "Not Available";
                    //         console.log(newResults);
                    //     }
                    //     // Pushes to results array if article is not already in the array
                    //     if(this.state.results.indexOf(newResults) === -1){
                    //         this.setState({results: this.state.results.concat(newResults)});
                    //     }
                    // }
                }
            }.bind(this));
        }
    }

    // This function allows childrens to update the parent.
    setBidder(bidder) {
        this.setState({bidder: bidder});
    }

    setBidAmount(bidAmount) {
        this.setState(bidAmount: bidAmount});
    }

    getClick(bid) {
        // console.log("article in get clicked", article);
        helpers.postSaved(article.head, article.url, article.snippet, article.pub_date).then(function () {
            // After we've done the post... then get the updated Saved
            helpers.getSaved().then(function (response) {
                this.setState({Saved: response.data});
                // console.log('Saved', this.state.Saved);
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
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
