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

  //Implement useEffect hook to fetch the Ron Swanson API via a url.
  //Created a new variable quotes to map a new function with parameters of an obj and i, which will return an id and data from the quotes API.
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://ron-swanson-quotes.herokuapp.com/v2/quotes/50`;
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



