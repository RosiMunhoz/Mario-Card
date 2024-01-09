import mario from './assets/mario.png';
import bgMario from  './assets/bg-mario.png';
import yoshi from './assets/yoshi.png';
import bgYoshi from './assets/bg-yoshi.png';
import princesa from './assets/princesa.png';
import bgPrincesa from './assets/bg-princesa.png';
import kong from './assets/kong.png';
import bgKong from './assets/bg-kong.png';
import Card from './components/Card';

import './App.css';

function App() {
  return (
    <div className="container">
      <Card bg={mario} bgHover={bgMario} title="Mario" color="#bf2925" />
      <Card bg={yoshi} bgHover={bgYoshi} title="Yoshi" color="#405e46"/>
      <Card bg={bgPrincesa} bgHover={princesa} title="Princesa" color="#FC4382" />
      <Card bg={bgKong} bgHover={kong} title="Donkey Kong" color="#1F0A03" />
    
    </div>
  )
}

export default App
