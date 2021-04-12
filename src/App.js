import React, { useEffect, useState } from 'react';
import "./App.css";
import List from "./Components/List";
import WithListLoading from "./Components/WithListLoading";
import Header from "./Components/Header";
import VoteContext from "./Components/VoteContext";

function App() {
  const ListLoading = WithListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    quotes: null,
  });

  const [voteData, setVoteData] = useState({
    total: 0,
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
      <VoteContext.Provider value = {{voteData, setVoteData}}>
        <Header />
          <div className='repo-container'>
            <ListLoading isLoading={appState.loading} quotes={appState.quotes} />
          </div>
      </VoteContext.Provider>
    </div>
  );
}
export default App;





