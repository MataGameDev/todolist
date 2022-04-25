
import React from 'react';
import Header from '../shared/layout/Header';
import './App.css';
import Footer from '../shared/layout/Footer';
import Content from '../shared/layout/Content';
/*import Todo from './Todo/Todo';*/
import Timer from './pomodoro/Timer';

function App() {
  return (
    <div className="App">
      <Header title="Header" url="https://github.com/"/>
      <Content >
        <Timer/>
      </Content>
      <Footer />
    </div>
  );
}

export default App;
