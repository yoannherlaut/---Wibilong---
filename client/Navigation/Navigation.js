import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Screens
import Home from '../Screens/Home';
import UsersList from '../Screens/UsersList';
import AlbumsList from '../Screens/AlbumsList';
import PhotosList from '../Screens/PhotosList';
import PostsList from '../Screens/PostsList';
import NotFound from '../Screens/NotFound';

export default class Navigation extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/users' component={UsersList} />
					<Route exact path='/albums' component={AlbumsList} />
					<Route exact path='/photos' component={PhotosList} />
					<Route exact path='/posts' component={PostsList} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		)
	}
}