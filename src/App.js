import { Component } from "react";

class Header extends Component {
  render(){
    this.state =
    {
      name:"aiman",
      skills:["react","html"]
    }
    return(
      <> 
      <h2>{this.state.name}</h2>
      {this.state.skills.map((item)=>(
        <>
        <p>{item}</p>
        <hr/>
        </>

      ))}
      </>
    )
  }
}
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default Header;
