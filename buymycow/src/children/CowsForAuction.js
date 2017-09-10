//Import React and Compnent
import React, { Component } from 'react';

//Create new class
class CowsForAuction extends Component {
	
	
	render() {
		console.log(this.props)
		return (

                <div className="row text-center">

                    <div className="col-sm-3">

                    </div>

                    <div className="col-sm-6">


                        <h2><strong>Cows To Bid On</strong></h2>

                                                      
                        <div>

                            {/*List of Cows for auction*/}
                            
                            <br />

                            {this.props.cows.map((cow, i) => {

                                return (
                                    <div key={i}>

                                        <p><strong>Cow ID: </strong>{cow.id}</p>
                                        
                                        <p><strong>Cow Name: </strong>{cow.cow}</p>

                                        <hr />

                                    </div>
                                )  

                            })} 
                                       
                        </div> 

                    </div> 

                    <div className="col-sm-3">

                    </div> 

                </div>

		)
	}
}
//export component for use by App.js
export default CowsForAuction;