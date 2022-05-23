
import React from 'react';
import Footer from '../shared/layout/Footer';
import Content from '../shared/layout/Content';
/*import 1 Actividad Todo from './Todo/Todo';*/
import Timer from './pomodoro/Timer';
//import 3 Actividad Intercambio from './Criptocosas/Intercambio';
//import 4 Actividad Crypto from './Criptocosas/Crypto';
//import 5 Actividad Charthome from './Chart/Charthome';
//import 6 Actividad Animation from './Animating/Animation';
//import 7 Actividad Numbers from './PureComponent/Numbers';
//import Calculator from './Calculadora/Calculator';

function App() {
  return (
    <div className="App">
      <Content >
        <Timer/>
      </Content>
      <Footer />
    </div>
  );
}

export default App;
