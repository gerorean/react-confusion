//import logo from './logo.svg';

import { Navbar, NavbarBrand } from 'reactstrap';



import Menu from './components/MenuComponent';



import './App.css';
import { Component } from 'react';


//Coursera ES6 class.. la aplicación de clase extiende el componente
//Subclases:
class App extends Component {//Component es una clase de componente
  render(){//Metodo de renderizado
    return (
      <div className="App">
        <Navbar className="App" dark color="primary">
          <div className="container Green">
            <NavbarBrand className="Red" href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

/*
class App extends Component {//Component es una clase de componente
  render(){//Metodo de renderizado
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
*/


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
