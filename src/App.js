import React, { useEffect, useState } from 'react';
import "./App.css";
import List from "./Components/List";
import WithListLoading from "./Components/WithListLoading";
import Header from "./Components/Header";

function App() {
  const ListLoading = WithListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    quotes: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://ron-swanson-quotes.herokuapp.com/v2/quotes/20`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((_quotes) => {
        const quotes = _quotes.map(function(obj,i) {
          return {
            id: i,
            data: obj
          }
        })

        setAppState({ loading: false, quotes: quotes });
      });
  }, [setAppState]);

  return (
    <div className='App'>
          <Header />
            <div className='repo-container'>
              <ListLoading isLoading={appState.loading} quotes={appState.quotes} />
            </div>   
    </div>
  );
}
export default App;



