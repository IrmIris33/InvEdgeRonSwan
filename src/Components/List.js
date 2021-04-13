import React from 'react';
import Quote from "./Quote";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/List.css";
import { ListGroup, ListGroupItem } from 'react-bootstrap';


const List = (props) => {
  const { quotes } = props;
  if (!quotes || quotes.length === 0) return <p>No quotes, sorry</p>;

  return (
    <div>
      {quotes.map((quote) => {
        return (
          <div>
            <ListGroup>
              <ListGroupItem variant="dark">
                  <Quote id= {quote.id} data = {quote.data}/>
              </ListGroupItem>
            </ListGroup>
          </div>
        );
      })}
    </div>
  );
};
export default List;