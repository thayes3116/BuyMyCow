//Import React and Compnent
import React, { Component } from 'react';

//Create new class
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
        this.setState({
            currentCow: event.target.value
        });
    }

    // When a user submits...
    handleSubmit(event) {

        event.preventDefault();

        // Gets passed to App.js
        this.props.setCow(this.state.currentCow);            
    }


	// This is the component's render method
    render() {

        return (

            <div className="text-center">

                <div className="row text-center">

                        <div className="panel panel-default text-center">

                            <div className="panel-heading text-center">

                                <h2 className="panel-title text-center"><strong>Cows to bid on</strong></h2>

                            </div>
                                
                            <div className="panel-body text-center">

                                    {/*List of Cows for auction*/}
                                    
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

                        </div>    
                </div>

                <div className="row text-center">

                        <div className="panel panel-default text-center">

                            <div className="panel-heading text-center">

                                <h3 className="panel-title text-center">Enter an ID of a cow to bid on</h3>
                                
                            </div>


                            <div className="panel-body text-center">

                                {/*Form to change cow to bid on*/}
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
                    <hr />
                </div>   
            </div> 
        );
    }
}

//export compenent for use by App.js
export default cowsForAuction;