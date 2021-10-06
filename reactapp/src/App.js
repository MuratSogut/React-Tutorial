//import logo from './logo.svg';

import Navbar from "./components/Navbar";
import User from "./components/User";
import './App.css';

function App() {

  const test = 34;
  const isAuth = false;

  return (
    <div className="container">
    <h1>TEST</h1>
    {1+1}
    <h1>{"murat".toUpperCase()}</h1>
    {test}
    <div>
      {
      isAuth ? <p>Kayıtlı</p>
      : null
      }
    </div>

      <h4>App Component</h4>
      <User/>
      <User/>
      <User/>
      <User/>

      <h4 style = {{color:"blue", fontSize:"20px"}}>APP</h4>
      <h4 className="header">APP 2</h4>

      <Navbar/>
      <Navbar/>

      
    </div>
  );
}

export default App;
