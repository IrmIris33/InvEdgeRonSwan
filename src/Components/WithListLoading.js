import React from 'react';

//Create a higher component that takes in another component to return logic.
//Checks loading component state if true a message appears as data is loaded.
function WithListLoading(Component) {
  return function LoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Hold on, fetching quotes may take some time...
      </p>
    );
  };
}
export default WithListLoading;