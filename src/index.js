import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Posts from './posts';
import Comments from './comments';
import Albums from './albums';
import Todos from './todos';
import Photos from './photos';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Posts/>
    <Comments/>
    <Albums/>
    <Todos/>
    <Photos/>
  </React.StrictMode>
);

