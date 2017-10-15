import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalDB } from '../firebase';

class AddGoal extends Component {
	constructor(props){
		super(props);
		this.state = {
			title: ''
		}
	}

	addGoal(){
		// console.log('state', this.state);
		const { title } = this.state;
		const { email } = this.props.user;
		goalDB.push({ email, title });
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

function mapStateToProps(state){
	const { user } = state;
	console.log( 'State in addGoal.jsx', state);
	return {
		user
	}
}
export default connect(mapStateToProps, null)(AddGoal);
