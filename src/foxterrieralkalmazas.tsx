// Függvény ami jsx-et ad vissza
// JSX = HTML + JAVASCRIPT
// Mivel komponens mindig nagy betűvel kezd Foxterrier 

import Paragraph from "./components/Paragraph";
import Vizsla from './images/logo512.png';

function FoxterrierAlkalmazas() {
  return (
    <>
      <Paragraph description="Vizsla leírása" title="Vizsla">
        <div>
          Ez itt a gyerek elem
        </div>
      </Paragraph>
      <Paragraph description="Labrador leírása" title="Labrador">
        <img src={Vizsla} />
        <img src={Vizsla} />
        <img src={Vizsla} />
      </Paragraph>
      <Paragraph description="Foxterrier leírása" title="Foxterrier" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aperiam, natus assumenda ratione earum nihil sit! Rerum, corporis nihil aut deleniti dolore dolores blanditiis minus nesciunt cum odio architecto amet.
      </p>
    </>
  );
}

export default FoxterrierAlkalmazas;
