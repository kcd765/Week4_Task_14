import React from "react";
import { Footer1 } from "./stories/components/Footer/Footer.stories";
import { Header1 } from './stories/components/Header/Header.stories';
import { Form } from './components/Form/Form'
import { CardDisplay } from './components/CardDisplay/CardDisplay'
import './App.css'

const App = () => {
  return (
    <div>
      <Header1 backgroundColor="green" />
      <div className="row">
        <div className="column">
          <Form />
        </div>

        <div className="column">
          <CardDisplay />
        </div>
      </div>
      <Footer1 color1="#61764B" color2="#9BA17B" height="5%" />
    </div>);
};
export default App;
