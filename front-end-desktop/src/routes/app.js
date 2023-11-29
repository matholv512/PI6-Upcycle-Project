import React from "react";
import Routes from "./routes";
import Navbar from "../layout/navBar";
import '../bootstrap.css';

class App extends React.Component {
    render() {
      return (
        <>
          <Navbar />
          <div className="container">
            <Routes />
          </div>
        </>
      );
    }
  }

  export default App;