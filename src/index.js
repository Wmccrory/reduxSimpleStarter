// JSX Bundler for rendering React components //

// dependencies //
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import API_KEY from './keys.js';

// JSX //
const App = () => {
	return (
		<div>
			<h1>{API_KEY}</h1>
			<SearchBar />
		</div>
	)
}

ReactDOM.render(<App />, document.querySelector('.container'));