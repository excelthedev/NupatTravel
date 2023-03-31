import './App.css';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Customer from './components/Customer';
import ExpertTeam from './components/ExpertTeam';
import Header from './components/Header';
import Transporting from './components/Transporting';
import WhatWeDo from './components/WhatWeDo';
import Whychoose from './components/Whychoose';
import WhyUs from './components/WhyUs';

function App() {
  return (
    <div className="App">
    <Header/>
    <Banner />
    <WhatWeDo />
    <WhyUs />
    <Transporting />
    <Customer />
    <Whychoose/>
    <ExpertTeam />
    <Contact />
    </div>
  );
}

export default App;
