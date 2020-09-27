import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainDashboard from './containers/MainDashboard';

function App() {
  return (
    <div>
      <MainDashboard articles={
        [{
          id:1,
          type: 'simple',
          title: 'Title #1',
          content: 'Whatever content',
        }, {
          id:2,
          type: 'image',
          title: 'Whatever titile',
          img: 'img#1'
        }]
      } />
    </div>
  );
}

export default App;
