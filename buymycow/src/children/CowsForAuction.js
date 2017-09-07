import React, { Component } from 'react';

class cowsForAuction extends Component

{	 
	constructor(props){

        super(props);

        this.state = {currentCow: ""};

        this.handleCowChange = this.handleCowChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // This function will respond to the user input
    handleCowChange(event) {
        event.preventDefault();

        // console.log(event.target)
        // const target2 = event.target;
        // const name2 = target2.name;
        this.setState({
            currentCow: event.target.value
        });
    }

    // When a user submits...
    handleSubmit(event) {

        event.preventDefault();

    // Gets passed to main
        this.props.setCow(this.state.currentCow);
               
        console.log("current cow", this.state.currentCow);
            
    }
	// Here we render the function
    render() {

    	console.log(this.props, 'this.props');

        return (
        <div>
            <div className="panel-body text-center">
                    <h2><strong>Cows to bid on</strong></h2>
                    <br />
                    {this.props.cows.map((cow, i) => {
                        return (
                            <div key={i}>
                                <p>Cow ID: {cow.id}</p>
                                
                                <p>Cow Name: {cow.cow}</p>
                                <hr />
                            </div>
                        )    
                    })} 
                           
            </div> 
            <div className="panel panel-default">

                <div className="panel-heading">

                    <h3 className="panel-title text-center">Enter an ID of a cow to bid on</h3>
                    
                </div>

                <div className="panel-body text-center">

	                <form onSubmit={this.handleSubmit}>

	                        <div className="form-group">

	                			<input
	                                name="cowToBidOn"
	                                placeholder="1"
	                                value={this.state.currentCow}
	                                type="text"
	                                className="form-control text-center"
	                                id="cowToBidOn"
	                                onChange={this.handleCowChange}
	                                required
	                        	/>  
	                            <br />

	                            <button
	                                className="btn btn-primary"
	                                type="submit">
	                                Submit
	                            </button>

	                        </div>
	                </form>
                 </div>      


            </div>
        </div>    
        );
    }
}

export default cowsForAuction;