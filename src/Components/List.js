import React from 'react';
import Quote from "./Quote";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/List.css";
import { ListGroup, ListGroupItem } from 'react-bootstrap';

//Create a component will display the quotes as a list.
const List = (props) => {
  const { quotes } = props;
  if (!quotes || quotes.length === 0) return <p>No quotes available.</p>;

  return (
    <div>
      {/*Map through the quote data to list the quotes*/}
      {quotes.map((quote) => {
        return (
          <div>
          {/*Used Bootstrap list group to style the list in a separate line.*/}
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