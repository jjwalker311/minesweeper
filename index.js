import React from 'react';
import ReactDOM from 'react-dom';

// main app
import App from './containers/App';
require('./style/default.less');

ReactDOM.render(<App />, document.getElementById('app'))