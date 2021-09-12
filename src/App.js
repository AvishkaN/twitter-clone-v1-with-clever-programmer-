import React from 'react';
import ReactDOM from 'react-dom';
import Feed from './Components/Feed';
import Sidebar from './Components/Sidebar';
import Widgets from './Components/Widjet';
import './App.css';
import styled from 'styled-components';



function App() {
  return (
    <DIV className="app">
      <Sidebar />
      {/* <Feed />*/}
        <Feed/>

      <Widgets /> 
    </DIV>
  );
}

const DIV=styled.div`
  display: flex;
  height: 100vh;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
`;


export default App;
