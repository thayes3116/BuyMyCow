import React, { Component } from 'react';

class BidForm extends Component
{
	 constructor(props){
        super(props);
        this.state = {term: "", startYear: "", endYear: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

}