import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import theme from './theme';
import { store } from './store/store';
import App from './App';

import './index.css';

ReactDOM.render(
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Provider store={store}>
					<App />
				</Provider>
			</Router>
		</ThemeProvider>,
	document.getElementById('root'),
);

