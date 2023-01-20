import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

// const API = "http://localhost:4000/mobiles";
const API = "https://vercel.com/salviuez/mdb";

function App() {
  return (
    <div className="App">
      <PhoneList />
    </div>
  );
}

function PhoneList() {
  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    fetch(`${API}/mobiles`)
      .then((data) => data.json())
      .then((mbs) => setMobiles(mbs));

  }, []);


  return (
    <div className="phone-list-container">
      {mobiles.map((mb) => (
        <Phone mobile={mb} />
      ))}

    </div>
  )
}




function Phone({ mobile }) {
  // const mobile = {
  //   "model": "OnePlus 9 5G",
  //   "img": "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
  //   "company": "Oneplus"
  // }
  return (
    <div className="phone-container">
      <img src={mobile.img} alt={mobile.model} className="phone-picture" />
      <h1 className="phone-name">{mobile.model}</h1>
      <h2 className="company-name">{mobile.company}</h2>
    </div>

  );
}

export default App;
