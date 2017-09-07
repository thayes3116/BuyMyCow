//Import React and Compnent
import React, { Component } from 'react';

//Create new class
class BidForm extends Component

{
	 constructor(props){

        super(props);

        this.state = {bidder: "", bidAmount: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // This function will respond to the user input
    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: event.target.value
        });
    }

    // When a user submits...
    handleSubmit(event) {

        event.preventDefault();

        //Pass updated information to App.js
        this.props.setBidder(this.state.bidder);
        this.props.setBidAmount(this.state.bidAmount);

        //Reset bidder and bidAmount   
        this.state = {bidder: "", bidAmount: ""};     
    }

    // This is the component's render method
    render() {
        
        return (
            <div className="panel panel-default">

                <div className="panel-heading">
                    <h3 className="panel-title text-center">Enter Your Username and Bid Here for cow with ID: {this.props.currentCow}</h3>
                </div>
                
                <div className="panel-body text-center">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                             
                            {/*Bidder*/}
                            <h4 className="text-center">
                                <strong>Username</strong>
                            </h4>
                            <input
                                name="bidder"
                                placeholder="Jimbo Sawgrass"
                                value={this.state.bidder}
                                type="text"
                                className="form-control text-center"
                                id="bidder"
                                onChange={this.handleChange}
                                required
                            />
                            <br />
                            {/*Bid Amount*/}
                            <h4 className="text-center">
                                <strong>Bid Amount in Dollars</strong>
                            </h4>
                            <input
                                name="bidAmount"
                                placeholder="2000"
                                value={this.state.bidAmount}
                                type="text"
                                className="form-control text-center"
                                id="bidAmount"
                                onChange={this.handleChange}
                                required
                            />
                            <br />
                            <br />
                            <button
                                className="btn btn-primary"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

//export the component for use in App.js
export default BidForm;