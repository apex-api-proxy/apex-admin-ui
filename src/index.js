import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import './styles.css';
import './fonts/FoundersGrotesk/FoundersGrotesk-Semibold.otf';
// import '../public/fonts/FoundersGrotesk/FoundersGrotesk-SemiboldItalic.otf'
import './fonts/Raleway/Raleway-Regular.ttf';
import App from './App';

ReactDOM.render(
  <Router>
  	<App />
  </Router>,
  document.getElementById('root')
);

// <React.StrictMode>
//   <App />
// </React.StrictMode>,