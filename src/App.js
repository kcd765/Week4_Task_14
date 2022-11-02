import React from "react";
import { Footer1 } from "./stories/components/Footer/Footer.stories";
import { Header1 } from './stories/components/Header/Header.stories';
import { Form1 } from './components/Form/Form.stories'
import { CardDisplay1 } from './components/CardDisplay/CardDisplay.stories'
import './App.css'

const App = () => {
  return (
    <div>
      <Header1 backgroundColor="green" />
      <div className="row">
        <div className="column">
          <Form1 />
        </div>

        <div className="column">
          <CardDisplay1 />
        </div>
      </div>
      <Footer1 color1="#61764B" color2="#9BA17B" height="5%" />
    </div>);
};
export default App;
