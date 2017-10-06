import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { browserHistory } from 'react-router';

class App extends Component {

	signOut(){
		firebaseApp.auth().signOut();
		browserHistory.push('/signin');
	}

	render(){
		return(
			<div
				className="userArea"
			>
			<h3> Hello User! Welcome to GoalCoach</h3> 
			<button
				className="btn btn-danger"
				onClick={ () => this.signOut()}
			>
			Sign Out
			</button>
			</div>
		)
	}
}

export default App;