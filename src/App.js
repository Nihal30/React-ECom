import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import ProductList from './features/product-list/ProductList';
import Home from './pages/Home';
import LogInPage from './pages/LogInPage';
import SignUpPage from "./pages/SignUpPage"

function App() {
  return (
    <div className="App">
    <SignUpPage />
    </div>
  );
}

export default App;
