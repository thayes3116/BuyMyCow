//Import React and Compnent
import React, { Component } from 'react';

//Create new class
class CowsForm extends Component {

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

                <div className="row text-center">

                    <div className="col-sm-4">

                    </div>


                    <div className="col-sm-4">

                        <h3>Enter ID of Cow</h3>

                        <br />

                        <div>

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

                    <div className="col-sm-4">

                    </div>
                  
                </div>   
           
        );
    }
}

//export component for use by App.js
export default CowsForm;