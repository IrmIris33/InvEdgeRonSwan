import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    quotes: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://ron-swanson-quotes.herokuapp.com/v2/quotes/20`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((quotes) => {
        setAppState({ loading: false, quotes: quotes });
      });
  }, [setAppState]);
  
  return (
    <div className='App'>
      <div className='container'>
        <h1>My Repositories</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} quotes={appState.quotes} />
      </div>
    </div>
  );
}
export default App;