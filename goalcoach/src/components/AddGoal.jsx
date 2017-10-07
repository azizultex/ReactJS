import React, { Component } from 'react';
import { goalDB } from '../firebase';

class AddGoal extends Component {
	constructor(props){
		super(props);
		this.state = {
			title: ''
		}
	}

	addGoal(){
		console.log('state', this.state);
		goalDB.push({ email : 'test@email.com', title: this.state.title });
	}

	render(){
		return (
			<div className="form-inline">
				<div className="form-group">
					<input 
						type="text"
						placeholder="Add your goal"
						className="form-control"
						onChange={ event => this.setState({ title: event.target.value })}
					/>
					<button 
						type="button"
						className="btn btn-info"
						onClick={ () => this.addGoal()}
					>
						Submit
					</button>
				</div>
			</div>
		)
	}
}

export default AddGoal;
