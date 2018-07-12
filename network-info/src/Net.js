import React, { Component } from 'react';
import NetworkInformation from 'react-network-info';
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
     <NetworkInformation>
  <Button secondary>Something</Button>
  </NetworkInformation>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);







