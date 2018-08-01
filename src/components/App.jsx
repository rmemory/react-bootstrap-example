import React from 'react';
import logo from './logo.svg';
import './app.css';

const welcome = 'Welcome to React';

const App = () => (
	<div className="App">
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<Welcome />
		</header>
		<p className="App-intro">
			{'To get started, edit'}
			<code>
				{'src/components/App.jsx'}
			</code>
			{'and save to reload.'}
		</p>
	</div>
);

const Welcome = () => (
	<h1 className="App-title">
		{welcome}
	</h1>
);

export default App;
