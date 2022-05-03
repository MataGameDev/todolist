
import React from 'react';
import Footer from '../shared/layout/Footer';
import Content from '../shared/layout/Content';
/*import Todo from './Todo/Todo';*/
//import Timer from './pomodoro/Timer';
import Intercambio from './Criptocosas/Intercambio';


function App() {
  return (
    <div className="App">
      <Content >
        <Intercambio/>
      </Content>
      <Footer />
    </div>
  );
}

export default App;
