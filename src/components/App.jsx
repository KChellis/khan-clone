import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import SubjectList from './SubjectList';
// import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <NavBar/>
      <SubjectList/>
    </div>
  );
}

export default App;
