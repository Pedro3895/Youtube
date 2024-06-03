import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserStore } from './contexts/context1';
import { UserStorage } from './context/userContext';
import {CategoryProvider} from './context/catContext';
import {SearchProvider} from './context/searchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserStorage>
      <CategoryProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </CategoryProvider>  
    </UserStorage>
  </React.StrictMode>
);

