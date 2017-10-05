import * as firebase from 'firebase'; 

var config = {
	apiKey: "AIzaSyAGeBrbCA_zNa7H6kERcF8H2iGoVueQ-yY",
	authDomain: "midyear-button-127005.firebaseapp.com",
	databaseURL: "https://midyear-button-127005.firebaseio.com",
	projectId: "midyear-button-127005",
	storageBucket: "",
	messagingSenderId: "712622965753"
};

export const firebaseApp = firebase.initializeApp(config);