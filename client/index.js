import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Imports Components
import Navigation from './Navigation/Navigation';

const App = () => {
	return (
		<Navigation />
	);
};

const root = document.querySelector('#app');
ReactDOM.render(<App />, root);