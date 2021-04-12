import React from 'react';
import Quote from "./Quote";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/List.css";
import { Card } from 'react-bootstrap';


const List = (props) => {
  const { quotes } = props;
  if (!quotes || quotes.length === 0) return <p>No quotes, sorry</p>;

  return (
    <div>
      {quotes.map((quote) => {
        return (
          <div className='container-list'>
            <Card>
                <Quote id= {quote.id} data = {quote.data}/>
            </Card>
          </div>
        );
      })}
    </div>
  );
};
export default List;