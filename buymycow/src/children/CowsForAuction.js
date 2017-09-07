import React, { Component } from 'react';

class cowsForAuction extends Component

{	 
	constructor(props){

        super(props);

        this.state = {currentCow: ""};

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

    // Gets passed to main
        this.props.setCurrentCow(this.state.currentCow);
               
        console.log("current cow", this.state.currentCow);
         
        this.state = {currentCow: ""};
         console.log("current cow", this.state.currentCow);
       
       
    }
	// Here we render the function
    render() {

    	console.log(this.props, 'this.props');
        return (
            <div className="panel panel-default">

                <div className="panel-heading">
                    <h3 className="panel-title text-center">Cows for Auction</h3>
                </div>

                <p>Enter the ID a cow to bid on</p>
                <div className="panel-body text-center">
	                <form onSubmit={this.handleSubmit}>

	                        <div className="form-group">

	                		<input
	                                name="cowToBidOn"
	                                placeholder="1"
	                                value={this.state.currentCow}
	                                type="text"
	                                className="form-control text-center"
	                                id="cowToBIdOn"
	                                onChange={this.handleChange}
	                                required/>  
	                            <br />

	                            <button
	                                className="btn btn-primary"
	                                type="submit">
	                                Submit
	                            </button>

	                        </div>
	                </form>
                 </div>        
                <div className="panel-body text-center">
                	{this.props.cows.map((cow, i) => {
                        return (
                            <div key={i}>
                                <p>{cow.id}</p>
                                
                                <p>{cow.cow}</p>
                                <br />
                            </div>
                        )    
                    })} 
                           
                </div> 

            </div>
        );
    }
}

export default cowsForAuction;