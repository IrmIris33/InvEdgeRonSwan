import React from 'react';
import Quote from "./Quote";

const List = (props) => {
  const { quotes } = props;
  if (!quotes || quotes.length === 0) return <p>No repos, sorry</p>;

  return (
    <ul>
      {quotes.map((quote) => {
        return (
          <div className='list'>
            <Quote /> <span className='repo-text'>{quote} </span>
          </div>
        );
      })}
    </ul>
  );
};
export default List;