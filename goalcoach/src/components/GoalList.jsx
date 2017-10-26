import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalDB } from '../firebase';
import { setGoals } from '../actions';




class GoalList extends Component {
	componentDidMount(){
		goalDB.on('value', snap => {
			let goals = [];
			snap.forEach( goal => {
				const { email, title } = goal.val();
				goals.push({ email, title });
			});
			// console.log('goals in GoalList.jsx', goals);
			this.props.setGoals(goals);
		})
	}

	render(){
		// console.log('this.props.goals', this.props.goals);
		return(
			<div>Goal List</div>
		)
	}
}

function mapStateToProps(state){
	console.log('State in GoalList.jsx', state);
	const { goals } = state;
	return {
		goals
	}
}

export default connect(mapStateToProps, { setGoals })(GoalList);